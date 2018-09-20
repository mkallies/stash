import React from 'react'
import PropTypes from 'prop-types'
import { Button, Icon, Input } from 'semantic-ui-react'

const propTypes = {
  handleGoogleAuth: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
}

const Login = ({ handleLogin, handleGoogleAuth }) => {
  return (
    <div>
      <Input icon="user" iconPosition="left" placeholder="Email address" />
      <Input
        icon="lock"
        iconPosition="left"
        placeholder="Password"
        type="password"
      />
      <Button content="Submit" onClick={handleLogin} />
      OR
      <Button
        as="a"
        color="youtube"
        href={'http://localhost:5000/auth/google'}
        onClick={handleGoogleAuth}
      >
        <Icon name="google" />
        Login with Google
      </Button>
    </div>
  )
}

Login.propTypes = propTypes

export default Login
