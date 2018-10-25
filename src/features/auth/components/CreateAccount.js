import React from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, Form, Input, Message } from 'semantic-ui-react'
import styles from '../auth.css'
import isEmpty from 'lodash/isEmpty'

const propTypes = {
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleCreateAccount: PropTypes.func.isRequired,
  toggleCreateOrSignUp: PropTypes.func.isRequired,
  userInput: PropTypes.object.isRequired,
}

const CreateAccount = ({
  errors,
  handleChange,
  handleCreateAccount,
  userInput: { email, firstName, lastName, password },
  toggleCreateOrSignUp,
}) => {
  console.log('errors', errors)
  const isDisabled =
    !email || !password || password.length < 6 || !lastName || !firstName
  return (
    <Form className={styles.loginContainer} error={!isEmpty(errors)}>
      <Form.Field error={errors.email}>
        <Input
          icon="mail"
          iconPosition="left"
          name="email"
          onChange={handleChange}
          placeholder="Email address"
          size="huge"
          value={email}
        />
        {errors.email && <Message content="Email is required" error />}
      </Form.Field>
      <Form.Field error={errors.firstName}>
        <Input
          icon="user outline"
          iconPosition="left"
          name="firstName"
          onChange={handleChange}
          placeholder="First name"
          size="huge"
          value={firstName}
        />
        {errors.firstName && <Message content="First name is required" error />}
      </Form.Field>
      <Form.Field error={errors.lastName}>
        <Input
          icon="user outline"
          iconPosition="left"
          name="lastName"
          onChange={handleChange}
          placeholder="Last name"
          size="huge"
          value={lastName}
        />
        {errors.lastName && <Message content="Last name is required" error />}
      </Form.Field>
      <Form.Field error={errors.password}>
        <Input
          icon="lock"
          iconPosition="left"
          name="password"
          onChange={handleChange}
          placeholder="Password"
          size="huge"
          type="password"
          value={password}
        />
        {errors.password && (
          <Message content="Password must be atleast 6 characters" error />
        )}
      </Form.Field>
      <Button
        className={styles.loginButton}
        color="green"
        content="Sign up"
        disabled={isDisabled}
        onClick={handleCreateAccount}
        size="huge"
        type="submit"
      />
      <Divider />
      <div className={styles.noAccount}>
        <span>Already have an account?</span>
        <Button onClick={toggleCreateOrSignUp}>Log in</Button>
      </div>
    </Form>
  )
}

CreateAccount.propTypes = propTypes

export default CreateAccount
