/**
 * React & libs
 */
import React, { useState } from 'react'
import { Box, makeStyles } from '@material-ui/core'

/**
 * Config, core, components, utils, assets, styles
 */
import { Header, SelectQuestionAmount, StartQuiz } from 'components'

const useStyles = makeStyles({
  content: {
    margin: 100,
    marginTop: 100
  }
})

export function Home(): JSX.Element {
  const classes = useStyles()

  const [amount, setAmount] = useState(1)
  const [step, setStep] = useState(1)

  return (
    <>
      <Header />
      <Box className={classes.content}>
        {step === 1 ? (
          <SelectQuestionAmount setAmount={setAmount} setStep={setStep} />
        ) : (
          <StartQuiz amount={amount} setAmount={setAmount} setStep={setStep} />
        )}
      </Box>
    </>
  )
}
