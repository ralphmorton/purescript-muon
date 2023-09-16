module Main where

import Prelude hiding (div)

import Data.Foldable (traverse_)
import Data.Tuple.Nested ((/\))
import Effect (Effect)
import Muon (
  Html,
  Muon,
  Signal,
  el,
  eventTargetValue,
  muon,
  on,
  text,
  state,
  (:=)
)

main :: Effect Unit
main = muon =<< app

app :: Effect (Signal (Muon Html))
app = do
  sig /\ cx <- state { i: 0, s: "something" }
  pure $ sig <#> \{ i, s } -> do
    let decrement = const (cx.i $ \v ->  v - 1)
    let increment = const (cx.i $ \v -> v + 1)
    pure $ el "div" [] [
      el "div" [] [
        el "div" [] [text s],
        el "input" [
          "type" := "text",
          "value" := s,
          on "input" $ traverse_ (cx.s <<< const) <<< eventTargetValue
        ] []
      ],
      el "hr" [] [],
      el "div" [] [
        el "div" [] [text $ show i],
        el "button" [on "click" decrement] [text "-"],
        el "button" [on "click" increment] [text "+"]
      ]
    ]
