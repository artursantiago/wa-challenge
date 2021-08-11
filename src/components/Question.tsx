/**
 * React & libs
 */
import React, { useMemo } from 'react'
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from '@material-ui/core'

import { shuffle } from 'utils'

export function Question({ question }: Question.Props): JSX.Element {
  const answers = useMemo(() => {
    return shuffle([...question.incorrectAnswers, question.correctAnswer])
  }, [question.correctAnswer, question.incorrectAnswers])

  return (
    <Box>
      <FormControl component="fieldset">
        <FormLabel component="legend">{question.question}</FormLabel>
        <RadioGroup name="selectedAnswer">
          {answers.map((answer) => (
            <FormControlLabel
              key={answer}
              value={answer}
              control={<Radio />}
              label={answer}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  )
}
