/**
 * React & libs
 */
import React from 'react'
import { Box, Button, Typography, makeStyles } from '@material-ui/core'

/**
 * Config, core, components, utils, assets, styles
 */
import { useQuiz } from 'core/hooks'

import { percentage } from 'utils/masks'

const useStyles = makeStyles({
  root: {
    gap: 20
  }
})

export function Score(): JSX.Element {
  const classes = useStyles()
  const { quiz, resetQuiz } = useQuiz()

  console.log({ quiz })

  return (
    <Box
      data-testid="score"
      display="flex"
      flexDirection="column"
      alignItems="center"
      className={classes.root}
    >
      {quiz.finishedAt && (
        <Typography variant="h4" align="center">
          Your score: {percentage(quiz.score.percentage)}
        </Typography>
      )}
      <Typography variant="h6" align="center">
        Right: {quiz.score.correctAnswersTotal}
        <br />
        Wrong: {quiz.score.wrongAnswersTotal}
        <br />
        {!quiz.finishedAt &&
          `Remaning:
        ${
          quiz.questions.length -
          (quiz.score.correctAnswersTotal + quiz.score.wrongAnswersTotal)
        }`}
      </Typography>

      {quiz.finishedAt && (
        <Button
          data-testid="try-another-quiz-button"
          variant="contained"
          color="primary"
          onClick={() => resetQuiz()}
        >
          Try another quiz
        </Button>
      )}
    </Box>
  )
}
