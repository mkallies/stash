import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Login from '../components/Login'
import CreateAccount from '../components/CreateAccount'
import { createAccount, login } from '../actions'
import { isEmail } from '../../../utils/helpers'
import isEmpty from 'lodash/isEmpty'

const authComponent = {
  login: Login,
  signup: CreateAccount,
}

const initialState = {
  inputErrors: {},
  email: '',
  password: '',
  firstName: '',
  lastName: '',
}

export class AuthContainer extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    createAccount: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = { ...initialState, type: props.type }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleLogin = () => {
    const { closeModal, login } = this.props

    login(this.state)
    closeModal()
  }

  handleCreateAccount = () => {
    const inputErrors = this.validateInput(this.state)
    const { createAccount, closeModal } = this.props

    this.setState({ inputErrors })

    if (!isEmpty(inputErrors)) {
      return
    }

    createAccount(this.state)
    closeModal()
  }

  handleGoogleAuth = () => {
    console.log('handle google ')
  }

  handleLogout = () => {
    console.log('handle logout')
  }

  toggleCreateOrSignUp = () => {
    const { type } = this.state

    const newType = type === 'login' ? 'signup' : 'login'

    this.setState({ type: newType })
  }

  validateInput = ({ email, password, firstName, lastName }) => {
    const inputErrors = {}

    if (isEmpty(email) || !isEmail(email)) {
      inputErrors.email = true
    }
    if (isEmpty(password) || password.length < 6) {
      inputErrors.password = true
    }
    if (isEmpty(firstName)) {
      inputErrors.firstName = true
    }
    if (isEmpty(lastName)) {
      inputErrors.lastName = true
    }

    return inputErrors
  }

  render() {
    const { inputErrors, type, ...userInput } = this.state

    const Element = authComponent[type]

    return (
      <Element
        errors={inputErrors}
        handleChange={this.handleChange}
        handleCreateAccount={this.handleCreateAccount}
        handleGoogleAuth={this.handleGoogleAuth}
        handleLogin={this.handleLogin}
        toggleCreateOrSignUp={this.toggleCreateOrSignUp}
        userInput={userInput}
      />
    )
  }
}

export default connect(
  null,
  { createAccount, login }
)(AuthContainer)
