import React from 'react'
import userEvent from '@testing-library/user-event'
import { customRender } from 'utils/tests'

import { QuizzesDrawer } from 'components/QuizzesDrawer'

const mockSetIsOpen = jest.fn()
jest.mock('core/hooks/useDrawer', () => ({
  useDrawer: () => ({
    isOpen: true,
    setIsOpen: mockSetIsOpen,
    previousQuizzes: []
  })
}))

describe('QuizzesDrawer component', () => {
  it('should be able to render without errors', () => {
    const { getByTestId } = customRender(<QuizzesDrawer />)

    const QuizzesDrawerContainerElement = getByTestId('quizzes-drawer')

    expect(QuizzesDrawerContainerElement).toBeInTheDocument()
  })

  it('should be able to close when click button', () => {
    const { getByTestId } = customRender(<QuizzesDrawer />)

    const QuizzesDrawerCloseContainerElement = getByTestId(
      'quizzes-drawer-close'
    )

    userEvent.click(QuizzesDrawerCloseContainerElement)

    expect(mockSetIsOpen).toBeCalled()
  })
})
