import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from '../../auth/containers/Login'
// import PrivateRoute from '../containers/PrivateRoute'
import Home from '../../../pages/home'
import Discover from '../../../pages/discover'
import MyStash from '../../../pages/my-stash'
import Friends from '../../../pages/friends'
import Search from '../../../pages/search'
import NavbarContainer from '../../../features/navigation/containers/NavbarContainer'

import FourOhFour from './404'

const App = () => (
  <div className="app">
    <NavbarContainer />

    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={Login} exact path="/login" />
      <Route component={Discover} exact path="/discover" />
      <Route component={MyStash} exact path="/my-stash" />
      <Route component={Friends} exact path="/friends" />
      <Route component={Search} exact path="/search" />
      <Route component={FourOhFour} />
    </Switch>
  </div>
)

export default App
