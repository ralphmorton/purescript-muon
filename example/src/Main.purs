module Main where

import Prelude hiding (div)

import Data.Foldable (traverse_)
import Data.Tuple.Nested ((/\))
import Effect (Effect)
import Effect.Aff (Aff)
import Effect.Class (liftEffect)
import Effect.Console (log)
import Muon (
  Html,
  Muon,
  Signal,
  button,
  click,
  div',
  eventTargetValue,
  hr',
  input,
  keyup,
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
    let decrement = const (cx.i $ i - 1)
    let increment = const (cx.i $ i + 1)
    pure $ div' [
      div' [
        div' [text s],
        input [
          "type" := "text",
          "value" := s,
          on keyup $ traverse_ cx.s <<< eventTargetValue
        ]
      ],
      hr',
      div' [
        div' [text $ show i],
        button [on click decrement] [text "-"],
        button [on click increment] [text "+"]
      ]
    ]
