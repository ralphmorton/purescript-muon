module Muon (
  Muon,
  Html,
  Prop,
  Event,
  module Signal,
  module Signal.Channel,
  muon,
  aff,
  -- State management
  class Stateful,
  state,
  class StatefulRL,
  stateRL,
  -- Elements
  text,
  el,
  -- Attributes
  attr,
  on,
  (:=),
  -- Utils
  eventTargetValue
) where

import Prelude

import Data.Foldable (foldr)
import Data.Maybe (Maybe(..))
import Data.Symbol (class IsSymbol)
import Data.Traversable (traverse_)
import Data.Tuple (Tuple(..))
import Effect (Effect)
import Effect.Aff (Aff, launchAff_)
import Prim.Row (class Cons, class Lacks)
import Record (delete, get, insert)
import Signal (Signal, constant, runSignal)
import Signal.Channel (Channel, channel, send, subscribe)
import Type.Proxy (Proxy(..))
import Type.RowList (class RowToList, Cons, Nil, RowList)

foreign import data Instance :: Type
foreign import data Props :: Type
foreign import data Html :: Type
foreign import data Event :: Type

--
-- Data types
--

data Muon a = Muon (Array Cmd) a

instance Functor Muon where
  map f (Muon cx a') = Muon cx (f a')

instance Apply Muon where
  apply (Muon cxa f) (Muon cxb a') = Muon (cxa <> cxb) (f a')

instance Applicative Muon where
  pure = Muon []

instance Bind Muon where
  bind (Muon cxa a') f =
    case f a' of
      Muon cxb b ->
        Muon (cxa <> cxb) b

instance Monad Muon

data Cmd
  = Fork (Aff Unit)

data Prop
  = Attr String String
  | Handler String (Event -> Effect Unit)

--
-- Muon
--

foreign import render_ :: (Instance -> Effect Unit) -> Effect Unit
foreign import html_ :: Instance -> Html -> Effect Unit

muon :: Signal (Muon Html) -> Effect Unit
muon sig =
  render_ \inst ->
    runSignal $ sig <#> \(Muon cx h) -> do
      html_ inst h
      traverse_ cmd cx

cmd :: Cmd -> Effect Unit
cmd = case _ of
  Fork f ->
    launchAff_ f

aff :: Aff Unit -> Muon Unit
aff = flip Muon unit <<< pure <<< Fork

--
-- State management
--

class Stateful a s t | a -> s, a -> t where
  state :: a -> Effect (Tuple s t)

instance (RowToList r l, StatefulRL l r s t) => Stateful (Record r) (Signal (Record s)) (Record t) where
  state = stateRL (Proxy :: Proxy l)

class StatefulRL (l :: RowList Type) (r :: Row Type) s t | l -> r, r -> s, r -> t where
  stateRL :: forall p. p l -> Record r -> Effect (Tuple (Signal (Record s)) (Record t))

instance StatefulRL Nil () () () where
  stateRL _ _ = pure (Tuple (pure {}) {})

instance (
  IsSymbol k,
  Cons k a r' r,
  Cons k a s s',
  Cons k (a -> Effect Unit) t t',
  Lacks k r',
  Lacks k s,
  Lacks k t,
  RowToList r' l',
  StatefulRL l' r' s t
) => StatefulRL (Cons k a l') r s' t' where
  stateRL _ rec = do
    let k = Proxy :: Proxy k
    Tuple s t <- stateRL (Proxy :: Proxy l') (delete k rec)
    chan <- channel (get k rec)
    let s' = insert k <$> (subscribe chan) <*> s
    let t' = insert k (send chan) t
    pure (Tuple s' t')

--
-- Elements
--

foreign import text_ :: String -> Html

text :: String -> Html
text = text_

foreign import el_ :: String -> Props -> Array Html -> Html

el :: String -> Array Prop -> Array Html -> Html
el tag px cx = el_ tag (props px) cx

foreign import emptyProps_ :: Unit -> Props
foreign import insertAttr_ :: String -> String -> Props -> Props
foreign import insertHandler_ :: String -> (Event -> Effect Unit) -> Props -> Props

props :: Array Prop -> Props
props = foldr insert (emptyProps_ unit)
  where
  insert prop = case prop of
    Attr k v ->
      insertAttr_ k v
    Handler evt f ->
      insertHandler_ evt f

--
-- Props
--

attr :: String -> String -> Prop
attr = Attr

infixl 5 attr as :=

on :: String -> (Event -> Effect Unit) -> Prop
on = Handler

--
-- Utils
--

foreign import eventTargetValue_ :: Maybe String -> (String -> Maybe String) -> Event -> Maybe String

eventTargetValue :: Event -> Maybe String
eventTargetValue = eventTargetValue_ Nothing Just
