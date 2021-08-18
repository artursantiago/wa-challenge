/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { createMemoryHistory, MemoryHistory } from 'history'
import userEvent from '@testing-library/user-event'

import { customRender } from 'utils/tests'

import { Score } from 'components'

const mockResetQuiz = jest.fn()
jest.mock('core/hooks/useQuiz', () => ({
  useQuiz: () => ({
    quiz: {
      id: '1629115687311',
      questions: [
        {
          category: 'Entertainment: Video Games',
          type: 'boolean',
          difficulty: 'easy',
          question:
            'The ghosts in &quot;Pac-Man&quot; and &quot;Ms. Pac-Man&quot; have completely different behavior.',
          correctAnswer: 'True',
          incorrectAnswers: ['False'],
          selectedAnswer: 'True'
        }
      ],
      score: { correctAnswersTotal: 1, wrongAnswersTotal: 0, percentage: 1 },
      startedAt: '2021-08-16T12:07:52.525Z',
      finishedAt: '2021-08-16T12:08:07.311Z'
    },
    resetQuiz: mockResetQuiz
  })
}))

describe('Score component', () => {
  let history: MemoryHistory<unknown>

  beforeEach(() => {
    history = createMemoryHistory()
  })

  it('should be able to render without errors', () => {
    const { getByTestId } = customRender(<Score />, history)

    const ScoreContainerElement = getByTestId('score')

    expect(ScoreContainerElement).toBeInTheDocument()
  })

  it('should be able to call reset function when click button', () => {
    const { getByTestId } = customRender(<Score />, history)

    const TryAnotherQuizButtonElement = getByTestId('try-another-quiz-button')

    userEvent.click(TryAnotherQuizButtonElement)

    expect(mockResetQuiz).toBeCalled()
  })
})
