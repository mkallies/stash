import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import PrivateRoute from '../containers/PrivateRoute'
import Home from '../../../features/home/containers/HomeContainer'
import MyStash from '../../../features/my-stash/containers/MyStashContainer'
import NavbarContainer from '../../../features/navigation/containers/NavbarContainer'
import Admin from '../../../features/admin/containers/AdminContainer'
import { ThemeProvider } from 'styled-components'
import theme from '../../../styles'

import FourOhFour from './404'

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="app">
      <NavbarContainer />

      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={MyStash} exact path="/my-stash" />
        <PrivateRoute component={Admin} path="/admin" />
        <Route component={FourOhFour} />
      </Switch>
      <ToastContainer />
    </div>
  </ThemeProvider>
)

export default App
