import React from 'react'

import { ThemeProvider } from 'core/contexts'

import { Header } from 'components'
import { Home } from 'pages'

export function App(): JSX.Element {
  return (
    <ThemeProvider>
      <Header />
      <Home />
    </ThemeProvider>
  )
}
