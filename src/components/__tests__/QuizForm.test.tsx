import React from 'react'
import { customRender } from 'utils/tests'

import { QuizForm } from 'components/QuizForm/QuizForm'

describe('QuizForm component', () => {
  it('should be able to render without errors', () => {
    const { getByTestId } = customRender(<QuizForm />)

    const QuizFormContainerElement = getByTestId('quiz-form')

    expect(QuizFormContainerElement).toBeInTheDocument()
  })
})
