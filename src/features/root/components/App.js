import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from '../../auth/containers/Login'
// import PrivateRoute from '../containers/PrivateRoute'
import Home from '../../../pages/Home'
import FourOhFour from './404'

const App = () => (
  <div className="app">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route component={FourOhFour} />
    </Switch>
  </div>
)

export default App
