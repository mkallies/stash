import React from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, Form, Input } from 'semantic-ui-react'
import styles from '../auth.css'

const propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  toggleCreateOrSignUp: PropTypes.func.isRequired,
  userInput: PropTypes.object.isRequired,
}

const Login = ({
  handleChange,
  handleLogin,
  toggleCreateOrSignUp,
  userInput: { email, password },
}) => {
  console.log(email, password)
  const isDisabled = !email || !password || password.length < 6

  console.log(isDisabled)
  return (
    <Form className={styles.loginContainer}>
      <Form.Field>
        <Input
          icon="user"
          iconPosition="left"
          name="email"
          onChange={handleChange}
          placeholder="Email address"
          size="huge"
        />
      </Form.Field>
      <Form.Field>
        <Input
          icon="lock"
          iconPosition="left"
          name="password"
          onChange={handleChange}
          placeholder="Password"
          size="huge"
          type="password"
        />{' '}
      </Form.Field>
      <Button
        className={styles.loginButton}
        color="teal"
        content="Log in"
        disabled={isDisabled}
        onClick={handleLogin}
        size="huge"
        type="submit"
      />
      <Divider />
      <div className={styles.noAccount}>
        <span>Don&#39;t have an account?</span>
        <Button onClick={toggleCreateOrSignUp}>Sign up</Button>
      </div>
    </Form>
  )
}

Login.propTypes = propTypes

export default Login
