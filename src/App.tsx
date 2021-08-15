/**
 * React & libs
 */
import React from 'react'

/**
 * Config, core, components, utils, assets, styles
 */
import { Routes } from 'config/routes'
import { DrawerProvider, QuizProvider, ThemeProvider } from 'core/contexts'

export function App(): JSX.Element {
  return (
    <ThemeProvider>
      <DrawerProvider>
        <QuizProvider>
          <Routes />
        </QuizProvider>
      </DrawerProvider>
    </ThemeProvider>
  )
}
