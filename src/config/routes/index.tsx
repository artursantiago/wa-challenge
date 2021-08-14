import React, { Suspense } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'

import { Home, Quiz } from 'pages'

import history from './history'

export const Routes = (): JSX.Element => {
  return (
    <Router history={history}>
      <Suspense fallback={<CircularProgress />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/quiz" component={Quiz} />
        </Switch>
      </Suspense>
    </Router>
  )
}
