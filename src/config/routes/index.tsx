/**
 * React & libs
 */
import React, { Suspense } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'

/**
 * Config, core, components, utils, assets, styles
 */
import { QuizzesDrawer } from 'components'
import { Home, Quiz, Review } from 'pages'

import history from './history'

export type RouteParams = {
  id?: string
}

export const Routes = (): JSX.Element => {
  return (
    <Router history={history}>
      <Suspense fallback={<CircularProgress />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/quiz" component={Quiz} />
          <Route path="/quiz/:id" component={Review} />
        </Switch>
      </Suspense>
      <QuizzesDrawer />
    </Router>
  )
}
