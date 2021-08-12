import React from 'react'

import { Routes } from 'config/routes'
import { QuizProvider, ThemeProvider } from 'core/contexts'

export function App(): JSX.Element {
  return (
    <ThemeProvider>
      <QuizProvider>
        <Routes />
      </QuizProvider>
    </ThemeProvider>
  )
}
