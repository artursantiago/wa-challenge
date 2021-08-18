import React from 'react'
import { customRender } from 'utils/tests'

import { Question } from 'components/Question'
import { question } from 'utils/tests/mocks'

describe('Question component', () => {
  it('should be able to render without errors', () => {
    const { getByTestId } = customRender(
      <Question question={question} index={0} handleChange={jest.fn()} />
    )

    const QuestionContainerElement = getByTestId('question')

    expect(QuestionContainerElement).toBeInTheDocument()
  })
})
