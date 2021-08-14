/**
 * React & libs
 */
import React, { useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import { Menu, NightsStay, WbSunny } from '@material-ui/icons'

/**
 * Config, core, components, utils, assets, styles
 */
import { useDrawer, useTheme } from 'core/hooks'

export function Header(): JSX.Element {
  const history = useHistory()

  const { theme, setTheme } = useTheme()
  const { setIsOpen: setDrawerIsOpen } = useDrawer()

  const headerTitle = useMemo(() => {
    return history?.location?.pathname?.includes('quiz') ? 'Quiz' : 'Home'
  }, [history.location.pathname])

  function handleSwitchTheme(): void {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h4" style={{ marginRight: 'auto' }}>
          {headerTitle}
        </Typography>
        <IconButton onClick={handleSwitchTheme}>
          {theme === 'dark' ? <WbSunny /> : <NightsStay />}
        </IconButton>
        <IconButton onClick={() => setDrawerIsOpen((prev) => !prev)}>
          <Menu />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
