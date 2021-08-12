/**
 * React & libs
 */
import React, { useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import { NightsStay, WbSunny } from '@material-ui/icons'

/**
 * Config, core, components, utils, assets, styles
 */
import { useTheme } from 'core/hooks'

export function Header(): JSX.Element {
  const { theme, setTheme } = useTheme()
  const history = useHistory()

  const headerTitle = useMemo(() => {
    return history?.location?.pathname?.includes('quiz') ? 'Quiz' : 'Home'
  }, [history.location.pathname])

  function handleSwitchTheme(): void {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h4">{headerTitle}</Typography>
        <IconButton onClick={handleSwitchTheme} style={{ marginLeft: 'auto' }}>
          {theme === 'dark' ? <WbSunny /> : <NightsStay />}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
