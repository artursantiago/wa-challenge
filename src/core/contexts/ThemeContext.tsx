/**
 * React & libs
 */
import React, { createContext, useMemo, useState } from 'react'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider as ThemeProviderMUI } from '@material-ui/styles'
import { createTheme } from '@material-ui/core/styles'
import '@fontsource/roboto'

export const ThemeContext = createContext({} as ThemeContext.Data)

export function ThemeProvider({ children }: ThemeContext.Props): JSX.Element {
  const [themeType, setThemeType] = useState<ThemeContext.Theme>('light')

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          type: themeType
        }
      }),
    [themeType]
  )

  return (
    <ThemeContext.Provider
      value={{
        theme: themeType,
        setTheme: setThemeType
      }}
    >
      <ThemeProviderMUI theme={theme}>
        {children}
        <CssBaseline />
      </ThemeProviderMUI>
    </ThemeContext.Provider>
  )
}
