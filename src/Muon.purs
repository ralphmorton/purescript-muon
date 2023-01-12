module Muon (
  Prop,
  Html,
  Event,
  EventType,
  module Signal,
  module Signal.Channel,
  muon,
  -- Elements
  text,
  el,
  span,
  p,
  hr,
  img,
  div,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  table,
  thead,
  tbody,
  tr,
  th,
  td,
  i,
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
  -- Utils
  eventTargetValue
) where

import Prelude

import Data.Foldable (foldr)
import Data.Maybe (Maybe(..))
import Effect (Effect)
import Signal (Signal, runSignal)
import Signal.Channel (Channel, channel, send, subscribe)

foreign import data Instance :: Type
foreign import data Props :: Type
foreign import data Html :: Type
foreign import data Event :: Type

foreign import render_ :: (Instance -> Effect Unit) -> Effect Unit
foreign import html_ :: Instance -> Html -> Effect Unit
foreign import text_ :: String -> Html
foreign import emptyProps_ :: Unit -> Props
foreign import insertAttr_ :: String -> String -> Props -> Props
foreign import insertHandler_ :: String -> (Event -> Effect Unit) -> Props -> Props
foreign import el_ :: String -> Props -> Array Html -> Html
foreign import eventTargetValue_ :: Maybe String -> (String -> Maybe String) -> Event -> Maybe String

data Prop
  = Attr String String
  | Handler EventType (Event -> Effect Unit)

newtype EventType
  = EventType String

muon :: Signal Html -> Effect Unit
muon sig = render_ \inst ->
  runSignal $ html_ inst <$> sig

--
-- Elements
--

text :: String -> Html
text = text_

el :: String -> Array Prop -> Array Html -> Html
el tag px cx = el_ tag (props px) cx

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

p :: Array Prop -> Array Html -> Html
p = el "p"

hr :: Array Prop -> Html
hr = flip (el "hr") []

img :: Array Prop -> Html
img = flip (el "img") []

div :: Array Prop -> Array Html -> Html
div = el "div"

h1 :: Array Prop -> Array Html -> Html
h1 = el "h1"

h2 :: Array Prop -> Array Html -> Html
h2 = el "h2"

h3 :: Array Prop -> Array Html -> Html
h3 = el "h3"

h4 :: Array Prop -> Array Html -> Html
h4 = el "h4"

h5 :: Array Prop -> Array Html -> Html
h5 = el "h5"

h6 :: Array Prop -> Array Html -> Html
h6 = el "h6"

table :: Array Prop -> Array Html -> Html
table = el "table"

thead :: Array Prop -> Array Html -> Html
thead = el "thead"

tbody :: Array Prop -> Array Html -> Html
tbody = el "tbody"

tr :: Array Prop -> Array Html -> Html
tr = el "tr"

th :: Array Prop -> Array Html -> Html
th = el "th"

td :: Array Prop -> Array Html -> Html
td = el "td"

i :: Array Prop -> Array Html -> Html
i = el "i"

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

--
-- Utils
--

eventTargetValue :: Event -> Maybe String
eventTargetValue = eventTargetValue_ Nothing Just