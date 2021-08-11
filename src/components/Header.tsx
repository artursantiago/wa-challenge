/**
 * React & libs
 */
import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import { NightsStay, WbSunny } from '@material-ui/icons'

/**
 * Config, core, components, utils, assets, styles
 */
import { useTheme } from 'core/hooks'

export function Header(): JSX.Element {
  const { theme, setTheme } = useTheme()

  function handleSwitchTheme(): void {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h4">Quiz</Typography>
        <IconButton onClick={handleSwitchTheme} style={{ marginLeft: 'auto' }}>
          {theme === 'dark' ? <WbSunny /> : <NightsStay />}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
