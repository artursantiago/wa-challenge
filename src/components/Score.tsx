/**
 * React & libs
 */
import React from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Button, Typography } from '@material-ui/core'

/**
 * Config, core, components, utils, assets, styles
 */
import { useQuiz } from 'core/hooks'

import { percentage } from 'utils/masks'

export function Score(): JSX.Element {
  const history = useHistory()
  const { quiz, resetQuiz } = useQuiz()

  const handleResetQuiz = (): void => {
    resetQuiz()
    history.push('/')
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      style={{ margin: '0 auto', gap: 20 }}
    >
      {quiz.finishedAt && (
        <Typography variant="h4" style={{ textAlign: 'center' }}>
          Your score: {percentage(quiz.score.percentage)}
        </Typography>
      )}
      <Typography variant="h6" style={{ textAlign: 'center' }}>
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
        <Button variant="contained" color="primary" onClick={handleResetQuiz}>
          Try another quiz
        </Button>
      )}
    </Box>
  )
}
