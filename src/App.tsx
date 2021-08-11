import React from 'react'

import { ThemeProvider } from 'core/contexts'

import { Header } from 'components'
import { Home, Quiz } from 'pages'

export function App(): JSX.Element {
  return (
    <ThemeProvider>
      <Header />
      {/* <Home /> */}
      <Quiz />
    </ThemeProvider>
  )
}
