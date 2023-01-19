module Muon (
  Muon,
  Html,
  Prop,
  Event,
  EventType,
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
  el',
  span, span',
  p, p',
  hr, hr',
  img,
  div, div',
  h1, h1', h2, h2', h3, h3', h4, h4', h5, h5', h6, h6',
  table, table', thead, thead', tbody, tbody', tr, tr', th, th', td, td',
  i, i',
  a,
  button,
  input,
  textarea,
  -- Attributes
  attr,
  on,
  (:=),
  click,
  mousedown,
  mouseup,
  keydown,
  keyup,
  keypress,
  change,
  focus,
  blur,
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
  | Handler EventType (Event -> Effect Unit)

newtype EventType
  = EventType String

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

el' :: String -> Array Html -> Html
el' tag = el_ tag (emptyProps_ unit)

foreign import emptyProps_ :: Unit -> Props
foreign import insertAttr_ :: String -> String -> Props -> Props
foreign import insertHandler_ :: String -> (Event -> Effect Unit) -> Props -> Props

props :: Array Prop -> Props
props = foldr insert (emptyProps_ unit)
  where
  insert prop = case prop of
    Attr k v ->
      insertAttr_ k v
    Handler (EventType k) f ->
      insertHandler_ k f

span :: Array Prop -> Array Html -> Html
span = el "span"

span' :: Array Html -> Html
span' = el' "span"

p :: Array Prop -> Array Html -> Html
p = el "p"

p' :: Array Html -> Html
p' = el' "p"

hr :: Array Prop -> Html
hr = flip (el "hr") []

hr' :: Html
hr' = el' "hr" []

img :: Array Prop -> Html
img = flip (el "img") []

div :: Array Prop -> Array Html -> Html
div = el "div"

div' :: Array Html -> Html
div' = el' "div"

h1 :: Array Prop -> Array Html -> Html
h1 = el "h1"

h1' :: Array Html -> Html
h1' = el' "h1"

h2 :: Array Prop -> Array Html -> Html
h2 = el "h2"

h2' :: Array Html -> Html
h2' = el' "h2"

h3 :: Array Prop -> Array Html -> Html
h3 = el "h3"

h3' :: Array Html -> Html
h3' = el' "h3"

h4 :: Array Prop -> Array Html -> Html
h4 = el "h4"

h4' :: Array Html -> Html
h4' = el' "h4"

h5 :: Array Prop -> Array Html -> Html
h5 = el "h5"

h5' :: Array Html -> Html
h5' = el' "h5"

h6 :: Array Prop -> Array Html -> Html
h6 = el "h6"

h6' :: Array Html -> Html
h6' = el' "h6"

table :: Array Prop -> Array Html -> Html
table = el "table"

table' :: Array Html -> Html
table' = el' "table"

thead :: Array Prop -> Array Html -> Html
thead = el "thead"

thead' :: Array Html -> Html
thead' = el' "thead"

tbody :: Array Prop -> Array Html -> Html
tbody = el "tbody"

tbody' :: Array Html -> Html
tbody' = el' "tbody"

tr :: Array Prop -> Array Html -> Html
tr = el "tr"

tr' :: Array Html -> Html
tr' = el' "tr"

th :: Array Prop -> Array Html -> Html
th = el "th"

th' :: Array Html -> Html
th' = el' "th"

td :: Array Prop -> Array Html -> Html
td = el "td"

td' :: Array Html -> Html
td' = el' "td"

i :: Array Prop -> Array Html -> Html
i = el "i"

i' :: Array Html -> Html
i' = el' "i"

a :: Array Prop -> Array Html -> Html
a = el "a"

button :: Array Prop -> Array Html -> Html
button = el "button"

input :: Array Prop -> Html
input = flip (el "input") []

textarea :: Array Prop -> Array Html -> Html
textarea = el "textarea"

--
-- Props
--

attr :: String -> String -> Prop
attr = Attr

infixl 5 attr as :=

on :: EventType -> (Event -> Effect Unit) -> Prop
on = Handler

click :: EventType
click = EventType "click"

mousedown :: EventType
mousedown = EventType "mousedown"

mouseup :: EventType
mouseup = EventType "mouseup"

keydown :: EventType
keydown = EventType "keydown"

keyup :: EventType
keyup = EventType "keyup"

keypress :: EventType
keypress = EventType "keypress"

change :: EventType
change = EventType "change"

focus :: EventType
focus = EventType "focus"

blur :: EventType
blur = EventType "blur"

--
-- Utils
--

foreign import eventTargetValue_ :: Maybe String -> (String -> Maybe String) -> Event -> Maybe String

eventTargetValue :: Event -> Maybe String
eventTargetValue = eventTargetValue_ Nothing Just
