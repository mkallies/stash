import React, { FormEvent, MouseEvent } from 'react'
import { Button, Divider, Form, Input } from 'semantic-ui-react'
import styles from '../auth.css'

const Login = ({
  handleChange,
  handleLogin,
  toggleCreateOrSignUp,
  userInput: { email, password },
}: {
handleChange: (e: FormEvent<HTMLInputElement>) => void
handleLogin: (e: MouseEvent<HTMLElement>) => void
toggleCreateOrSignUp: (e: MouseEvent<HTMLElement>) => void
userInput: { email: string; password: string }
}) => {
  const isDisabled = !email || !password || password.length < 6

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

export default Login
