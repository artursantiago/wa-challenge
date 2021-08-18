/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import MockAdapter from 'axios-mock-adapter'
import { createMemoryHistory, MemoryHistory } from 'history'
import userEvent from '@testing-library/user-event'

import { customRender } from 'utils/tests'

import { apiInstance } from 'core/api/config'
import { StartQuiz } from 'components'

const apiMock = new MockAdapter(apiInstance)

const mockHandleStartQuiz = jest.fn()
jest.mock('core/hooks/useQuiz', () => ({
  useQuiz: () => ({
    handleStartQuiz: mockHandleStartQuiz
  })
}))

describe('StartQuiz component', () => {
  let history: MemoryHistory<unknown>

  const apiQuestionsResult = {
    response_code: 0,
    results: [
      {
        category: 'Entertainment: Video Games',
        type: 'multiple',
        difficulty: 'hard',
        question:
          'What&#039;s the name of the halloween-related Sims 4 Stuff Pack released September 29th, 2015?',
        correct_answer: 'Spooky Stuff',
        incorrect_answers: [
          'Ghosts n&#039; Ghouls',
          'Nerving Nights',
          'Fearful Frights'
        ]
      },
      {
        category: 'Entertainment: Video Games',
        type: 'multiple',
        difficulty: 'medium',
        question:
          'In &quot;Paper Mario: The Thousand Year Door&quot;, what is Hooktail&#039;s weakness?',
        correct_answer: 'The Sound of Crickets',
        incorrect_answers: [
          'Attacks from Koopas',
          'The &quot;Ice Storm&quot; Item',
          'The Hammer'
        ]
      }
    ]
  }

  apiMock.onGet(`api.php?amount=2`).reply(200, apiQuestionsResult)

  const amount = 2
  const setAmount = jest.fn((newAmount) => newAmount)
  const setStep = jest.fn((step) => step)

  beforeEach(() => {
    history = createMemoryHistory()
  })

  it('should be able to render without errors', () => {
    const { getByTestId } = customRender(
      <StartQuiz amount={amount} setAmount={setAmount} setStep={setStep} />,
      history
    )

    const StartQuizContainerElement = getByTestId('start-quiz')

    expect(StartQuizContainerElement).toBeInTheDocument()
  })

  it('should be able to show amount of questions the quiz will have', () => {
    const { getByTestId } = customRender(
      <StartQuiz amount={amount} setAmount={setAmount} setStep={setStep} />,
      history
    )

    const StartQuizContainerElement = getByTestId('start-quiz')

    expect(StartQuizContainerElement).toHaveTextContent(
      'Start the quiz with 2 questions?'
    )
  })

  it('should be able to go to go back when cancelled', async () => {
    const { getByTestId } = customRender(
      <StartQuiz amount={amount} setAmount={setAmount} setStep={setStep} />,
      history
    )

    const CancelStartQuizButonElement = getByTestId('cancel-start-quiz-button')

    userEvent.click(CancelStartQuizButonElement)

    expect(setAmount).toBeCalledTimes(1)
    expect(setStep).toBeCalledTimes(1)
  })

  it('should be able to go to quiz page when started', async () => {
    const { getByTestId } = customRender(
      <StartQuiz amount={amount} setAmount={setAmount} setStep={setStep} />,
      history
    )

    const StartQuizButonElement = getByTestId('start-quiz-button')

    userEvent.click(StartQuizButonElement)

    expect(history.location.pathname).toBe('/quiz')
    expect(mockHandleStartQuiz).toBeCalled()
  })
})
