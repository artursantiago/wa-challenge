/* eslint-disable import/no-extraneous-dependencies */
import React, { ReactElement } from 'react'
import { Router } from 'react-router-dom'
import { MemoryHistory } from 'history'
import { render, RenderOptions, RenderResult } from '@testing-library/react'

import { DrawerProvider, ThemeProvider } from 'core/contexts'

export const customRender = (
  Component: ReactElement,
  history: MemoryHistory<unknown>,
  options?: RenderOptions
): RenderResult => {
  return render(
    <ThemeProvider>
      <DrawerProvider>
        <Router history={history}>{Component}</Router>
      </DrawerProvider>
    </ThemeProvider>,
    { ...options }
  )
}
