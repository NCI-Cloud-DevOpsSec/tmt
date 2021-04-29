import React from 'react'
import { Switch, Route } from "react-router-dom"

import Profile from './components/Profile'
import Project from './components/Project'
import TestCase from './components/TestCase'

const Routes = () => (
  <div>
    <Switch>
      <Route path="/" exact component={Profile} />
      <Route path="/profile/" component={Profile} />
      <Route path="/project/" component={Project} />
      <Route path="/testCases/" component={TestCase} />
      <Route component={() => <p>404 no route found</p>} />
    </Switch>
    {/* <Footer /> */}
  </div>
)

export default Routes