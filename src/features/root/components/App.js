import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Login from '../../auth/containers/Login'
// import PrivateRoute from '../containers/PrivateRoute'
import Home from '../../../pages/home'
import MyStash from '../../../pages/my-stash'
import Search from '../../../pages/search'
import NavbarContainer from '../../../features/navigation/containers/NavbarContainer'
import Admin from '../../../features/admin/containers/AdminContainer'

import FourOhFour from './404'

const App = () => (
  <div className="app">
    <NavbarContainer />

    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={Login} exact path="/login" />
      <Route component={MyStash} exact path="/my-stash" />
      <Route component={Search} exact path="/search" />
      <Route component={Admin} exact path="/admin" />
      <Route component={FourOhFour} />
    </Switch>
    <ToastContainer />
  </div>
)

export default App
