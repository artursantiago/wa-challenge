/**
 * React & libs
 */
import React, { useCallback, useMemo } from 'react'
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from '@material-ui/core'
import { Check, Clear } from '@material-ui/icons'
import { green, red } from '@material-ui/core/colors'

import { shuffle } from 'utils/helpers'

export function Question({
  index,
  question,
  handleChange,
  showCorrection
}: Question.Props): JSX.Element {
  const alternatives = useMemo(() => {
    return shuffle([...question.incorrectAnswers, question.correctAnswer])
  }, [question.correctAnswer, question.incorrectAnswers])

  const isAlternativeCorrect = useCallback(
    (alternative: string) => {
      return alternative === question.correctAnswer
    },
    [question.correctAnswer]
  )

  return (
    <Box>
      <FormControl component="fieldset">
        <FormLabel component="legend">{question.question}</FormLabel>
        <RadioGroup
          name={`questions.${index}.selectedAnswer`}
          value={question.selectedAnswer ?? ''}
          onChange={handleChange}
        >
          {alternatives.map((alternative) => (
            <FormControlLabel
              name={`questions.${index}.selectedAnswer`}
              key={alternative}
              value={alternative}
              control={<Radio />}
              disabled={showCorrection}
              label={
                <Box display="flex" alignItems="center">
                  {showCorrection &&
                    (isAlternativeCorrect(alternative) ? (
                      <Check htmlColor={green[500]} />
                    ) : (
                      <Clear htmlColor={red[900]} />
                    ))}
                  {alternative}
                </Box>
              }
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  )
}
