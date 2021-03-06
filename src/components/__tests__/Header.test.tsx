/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { createMemoryHistory, MemoryHistory } from 'history'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { customRender } from 'utils/tests'

import { Header } from 'components'

describe('Header component', () => {
  let history: MemoryHistory<unknown>

  beforeEach(() => {
    history = createMemoryHistory()
  })

  it('should be able to render without errors', () => {
    const { getByTestId } = customRender(<Header />, history)

    const HeaderContainerElement = getByTestId('header')

    expect(HeaderContainerElement).toBeInTheDocument()
  })

  it('should be able to show the current page name', () => {
    history.push('/')
    const { getByTestId } = customRender(<Header />, history)

    const HeaderContainerElement = getByTestId('header')

    expect(HeaderContainerElement).toHaveTextContent('Home')
  })

  it('should be able to switch theme', () => {
    const { getByTestId } = customRender(<Header />, history)

    const ToggleThemeButtonElement = getByTestId('toggle-theme-button')

    expect(ToggleThemeButtonElement).toHaveAttribute('title', 'Use dark theme')

    userEvent.click(ToggleThemeButtonElement)

    expect(ToggleThemeButtonElement).toHaveAttribute('title', 'Use light theme')
  })

  it('should be able to open drawer', () => {
    const { getByTestId } = customRender(<Header />, history)

    const OpenDrawerButtonElement = getByTestId('open-drawer-button')

    userEvent.click(OpenDrawerButtonElement)

    expect(screen.getByTestId('open-drawer-button')).toBeInTheDocument()
  })
})
