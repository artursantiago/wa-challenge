import { useContext } from 'react'
import { ThemeContext } from 'core/contexts/ThemeContext'

export function useTheme(): ThemeContext.Data {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
