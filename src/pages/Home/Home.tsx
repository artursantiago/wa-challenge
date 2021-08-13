/**
 * React & libs
 */
import React, { useState } from 'react'

import { Header, SelectQuestionAmount, StartQuiz } from 'components'

export function Home(): JSX.Element {
  const [amount, setAmount] = useState(1)
  const [step, setStep] = useState(1)

  return (
    <>
      <Header />
      <div style={{ margin: 100, marginTop: 100 }}>
        {step === 1 ? (
          <SelectQuestionAmount setAmount={setAmount} setStep={setStep} />
        ) : (
          <StartQuiz amount={amount} setAmount={setAmount} setStep={setStep} />
        )}
      </div>
    </>
  )
}
