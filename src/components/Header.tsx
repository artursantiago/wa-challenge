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
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  title: {
    marginRight: 'auto'
  }
})

export function Header(): JSX.Element {
  const classes = useStyles()
  const history = useHistory()

  const { theme, setTheme } = useTheme()
  const { setIsOpen: setDrawerIsOpen } = useDrawer()

  const headerTitle = useMemo(() => {
    return history?.location?.pathname?.includes('quiz') ? 'Quiz' : 'Home'
  }, [history.location.pathname])

  const handleSwitchTheme = (): void => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <AppBar data-testid="header">
      <Toolbar>
        <Typography variant="h4" className={classes.title}>
          {headerTitle}
        </Typography>
        <IconButton
          data-testid="toggle-theme-button"
          title={`Use ${theme === 'dark' ? 'light' : 'dark'} theme`}
          onClick={handleSwitchTheme}
        >
          {theme === 'dark' ? <WbSunny /> : <NightsStay />}
        </IconButton>
        <IconButton
          data-testid="open-drawer-button"
          onClick={() => setDrawerIsOpen((prev) => !prev)}
        >
          <Menu />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
