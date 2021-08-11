import React from 'react'

import { ThemeProvider } from 'core/contexts'

export function App(): JSX.Element {
  return (
    <ThemeProvider>
      <div className="App" />
    </ThemeProvider>
  )
}
