import React from 'react'
import userEvent from '@testing-library/user-event'
import { customRender } from 'utils/tests'

import { QuizCard } from 'components/QuizCard'

import { quizFinishedState } from 'utils/tests/mocks'
import { percentage } from 'utils/masks'

const mockHandleSelectQuiz = jest.fn()
jest.mock('core/hooks/useDrawer', () => ({
  useDrawer: () => ({
    handleSelectQuiz: mockHandleSelectQuiz
  })
}))

describe('QuizCard component', () => {
  it('should be able to render without errors', () => {
    const { getByTestId } = customRender(
      <QuizCard quiz={quizFinishedState} index={0} />
    )

    const QuizCardContainerElement = getByTestId('quiz-card')

    expect(QuizCardContainerElement).toBeInTheDocument()
  })

  it('should be able show percentage of success of the quiz', () => {
    const { getByTestId } = customRender(
      <QuizCard quiz={quizFinishedState} index={0} />
    )

    const QuizCardContainerElement = getByTestId('quiz-card')

    expect(QuizCardContainerElement).toHaveTextContent(
      percentage(quizFinishedState.score.percentage)
    )
  })

  it('should handle click to show quiz content', () => {
    const { getByTestId } = customRender(
      <QuizCard quiz={quizFinishedState} index={0} />
    )

    const QuizCardActionAreaContainerElement = getByTestId(
      'quiz-card-action-area'
    )

    userEvent.click(QuizCardActionAreaContainerElement)

    expect(mockHandleSelectQuiz).toBeCalled()
  })
})
