import React, { useMemo } from 'react'
import { Box, Button, Typography } from '@material-ui/core'

import { useQuiz } from 'core/hooks'
import { useHistory } from 'react-router-dom'

export function Score(): JSX.Element {
  const history = useHistory()
  const { quiz, resetQuiz } = useQuiz()

  const percentageScore = useMemo(() => {
    return `${quiz.score.percentage * 100}%`
  }, [quiz.score.percentage])

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
        <Typography variant="h4">Your score: {percentageScore}</Typography>
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
