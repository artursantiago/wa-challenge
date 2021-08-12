/**
 * React & libs
 */
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Box,
  Button,
  FormGroup,
  FormLabel,
  TextField,
  Typography
} from '@material-ui/core'
import { useQuiz } from 'core/hooks'

import { Header } from 'components'

export function Home(): JSX.Element {
  const history = useHistory()
  const { handleStartQuiz } = useQuiz()

  const [amount, setAmount] = useState(1)
  const [step, setStep] = useState(1)

  const handleClickStart = async (): Promise<void> => {
    history.push('/quiz')
    await handleStartQuiz(amount)
  }

  const handleClickCancel = (): void => {
    setAmount(1)
    setStep(1)
  }

  return (
    <>
      <Header />
      <div style={{ margin: 100, marginTop: 100 }}>
        {step === 1 ? (
          <FormGroup style={{ padding: 24 }}>
            <FormLabel htmlFor="amount">
              <Typography
                variant="h6"
                align="center"
                style={{ marginBottom: 24 }}
              >
                How many questions do you want to answer?
              </Typography>
            </FormLabel>
            <TextField
              id="amount"
              variant="filled"
              type="number"
              placeholder="Amount"
              onChange={(e) => setAmount(Number(e.target.value))}
              value={amount}
            />
            <Button
              onClick={() => setStep(2)}
              variant="contained"
              type="submit"
              color="primary"
            >
              Next
            </Button>
          </FormGroup>
        ) : (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            style={{ gap: 20 }}
          >
            <Typography>
              Start the quiz with {amount}{' '}
              {amount > 1 ? 'questions' : 'question'}?
            </Typography>
            <Box display="flex" justifyContent="center" style={{ gap: 20 }}>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleClickCancel}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleClickStart}
              >
                Start
              </Button>
            </Box>
          </Box>
        )}
      </div>
    </>
  )
}
