/**
 * React & libs
 */
import React from 'react'

/**
 * Config, core, components, utils, assets, styles
 */
import { Routes } from 'config/routes'
import { DrawerProvider, QuizProvider, ThemeProvider } from 'core/contexts'

import { QuizzesDrawer } from 'components'

export function App(): JSX.Element {
  return (
    <ThemeProvider>
      <QuizProvider>
        <DrawerProvider>
          <Routes />
          <QuizzesDrawer />
        </DrawerProvider>
      </QuizProvider>
    </ThemeProvider>
  )
}
