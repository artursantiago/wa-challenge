import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'

import { Home, Quiz } from 'pages'

export const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Suspense fallback={<CircularProgress />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/quiz" component={Quiz} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}
