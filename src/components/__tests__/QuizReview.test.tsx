import React from 'react'
import { customRender } from 'utils/tests'

import { QuizReview } from 'components/QuizReview'

describe('QuizReview component', () => {
  it('should be able to render without errors', () => {
    const { getByTestId } = customRender(<QuizReview />)

    const QuizReviewContainerElement = getByTestId('quiz-review')

    expect(QuizReviewContainerElement).toBeInTheDocument()
  })
})
