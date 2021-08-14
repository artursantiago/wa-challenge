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

  const handleCancelQuiz = (): void => {
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
      <Box>
        <Typography variant="h4">
          Your score: {percentage(quiz.score.percentage)}
        </Typography>
        <Typography variant="h6">
          You got {quiz.score.correctAnswersTotal}/{quiz.questions.length}{' '}
          questions right.
        </Typography>
      </Box>
      <Button variant="contained" color="primary" onClick={handleCancelQuiz}>
        Try another quiz
      </Button>
    </Box>
  )
}
