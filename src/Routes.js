import React from 'react'
import { Switch, Route } from "react-router-dom"

import Profile from './components/Profile'

const Routes = () => (
  <div>
    <Switch>
      <Route path="/" exact component={Profile} />
      <Route path="/profile/" component={Profile} />
      <Route component={() => <p>404 no route found</p>} />
    </Switch>
    {/* <Footer /> */}
  </div>
)

export default Routes