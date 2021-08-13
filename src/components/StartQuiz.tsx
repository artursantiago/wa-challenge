import React from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Button, Typography } from '@material-ui/core'

import { useQuiz } from 'core/hooks'

export function StartQuiz({
  amount,
  setAmount,
  setStep
}: StartQuiz.Props): JSX.Element {
  const history = useHistory()
  const { handleStartQuiz } = useQuiz()

  const handleClickStart = async (): Promise<void> => {
    history.push('/quiz')
    await handleStartQuiz(amount)
  }

  const handleClickCancel = (): void => {
    setAmount(1)
    setStep(1)
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      style={{ gap: 20 }}
    >
      <Typography>
        Start the quiz with {amount} {amount > 1 ? 'questions' : 'question'}?
      </Typography>
      <Box display="flex" justifyContent="center" style={{ gap: 20 }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClickCancel}
        >
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleClickStart}>
          Start
        </Button>
      </Box>
    </Box>
  )
}
