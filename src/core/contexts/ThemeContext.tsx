import React, { createContext, useState } from 'react'
import { ThemeProvider as ThemeProviderMUI } from '@material-ui/styles'
import { createTheme } from '@material-ui/core/styles'
// eslint-disable-next-line import/no-unresolved
import 'fontsource-roboto'

export const ThemeContext = createContext({} as ThemeContext.Data)

export function ThemeProvider({ children }: ThemeContext.Props): JSX.Element {
  const [themeType, setThemeType] = useState<ThemeContext.Theme>('light')

  const theme = createTheme({
    palette: {
      type: themeType
    }
  })

  return (
    <ThemeContext.Provider
      value={{
        theme: themeType,
        setTheme: setThemeType
      }}
    >
      <ThemeProviderMUI theme={theme}>{children}</ThemeProviderMUI>
    </ThemeContext.Provider>
  )
}
