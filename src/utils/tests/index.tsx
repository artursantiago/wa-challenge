/* eslint-disable import/no-extraneous-dependencies */
import React, { ReactElement } from 'react'
import { BrowserRouter, Router } from 'react-router-dom'
import { MemoryHistory } from 'history'
import { render, RenderOptions, RenderResult } from '@testing-library/react'

import { DrawerProvider, QuizProvider, ThemeProvider } from 'core/contexts'

export const customRender = (
  Component: ReactElement,
  history?: MemoryHistory<unknown>,
  options?: RenderOptions
): RenderResult => {
  return render(
    <ThemeProvider>
      <DrawerProvider>
        <QuizProvider>
          {history ? (
            <Router history={history}>{Component}</Router>
          ) : (
            <BrowserRouter>{Component}</BrowserRouter>
          )}
        </QuizProvider>
      </DrawerProvider>
    </ThemeProvider>,
    { ...options }
  )
}
