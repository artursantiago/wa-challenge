/**
 * React & libs
 */
import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

/**
 * Config, core, components, utils, assets, styles
 */
import { useQuiz } from 'core/hooks'

import { Question } from 'components/Question'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    marginBottom: 20
  }
})

export function QuizReview(): JSX.Element {
  const classes = useStyles()
  const { quiz } = useQuiz()

  return (
    <Box className={classes.root}>
      {quiz.questions?.length > 0 &&
        quiz.questions?.map((question, index) => (
          <Question
            key={question.question}
            index={index}
            question={question}
            showCorrection
          />
        ))}
    </Box>
  )
}
