import React from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, Form, Icon, Input } from 'semantic-ui-react'
import styles from '../auth.css'
import { BASE_URL } from '../../../common/constants'

const propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleGoogleAuth: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  toggleCreateOrSignUp: PropTypes.func.isRequired,
}

const Login = ({
  handleChange,
  handleLogin,
  handleGoogleAuth,
  toggleCreateOrSignUp,
}) => {
  return (
    <Form className={styles.loginContainer}>
      <Button
        as="a"
        className={styles.loginButton}
        href={`${BASE_URL}/auth/google`}
        onClick={handleGoogleAuth}
        size="huge"
        style={{ background: 'white', border: '2px solid rgb(72, 72, 72)' }}
      >
        <Icon name="google" /> Log in with Google
      </Button>
      <Button
        as="a"
        className={styles.loginButton}
        color="facebook"
        href={`${BASE_URL}/auth/google`}
        onClick={handleGoogleAuth}
        size="huge"
        style={{ margin: '10px 0' }}
      >
        <Icon name="facebook" /> Log in with Facebook
      </Button>
      <Divider horizontal>or</Divider>
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
