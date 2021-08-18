import React from 'react'
import { customRender } from 'utils/tests'

import { SelectQuestionAmount } from 'components/SelectQuestionAmount/SelectQuestionAmount'

describe('SelectQuestionAmount component', () => {
  it('should be able to render without errors', () => {
    const { getByTestId } = customRender(
      <SelectQuestionAmount setAmount={jest.fn()} setStep={jest.fn()} />
    )

    const SelectQuestionAmountContainerElement = getByTestId(
      'select-question-amount'
    )

    expect(SelectQuestionAmountContainerElement).toBeInTheDocument()
  })
})
