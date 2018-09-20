import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Login from '../components/Login'

const authComponent = {
  login: Login,
}

export class AuthContainer extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
  }

  handleLogin = () => {
    console.log('handle login')
  }

  handleGoogleAuth = () => {
    console.log('handle google ')
  }

  render() {
    const { type } = this.props

    const Element = authComponent[type]

    return (
      <Element
        handleGoogleAuth={this.handleGoogleAuth}
        handleLogin={this.handleLogin}
      />
    )
  }
}

export default AuthContainer
