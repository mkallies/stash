import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import Navbar from '../components/Navbar'
import { LINKS } from '../constants'
import { getUser } from '../../auth/selectors'
import { Modal } from 'semantic-ui-react'
import { AuthContainer } from '../../auth/containers/AuthContainer'

const propTypes = {
  history: PropTypes.object.isRequired,
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
}

const PATHS_FOR_AUTH_MODALS = ['/login', '/create-account']

const AUTH_MODAL_TITLE = {
  '/login': {
    title: 'Login',
    type: 'login',
  },
  '/create-account': {
    title: 'Create an account',
    type: 'createAccount',
  },
}

const mapState = state => ({
  user: getUser(state),
})

export class NavbarContainer extends Component {
  state = {
    modalType: '',
  }

  handleClick = path => {
    if (PATHS_FOR_AUTH_MODALS.includes(path)) {
      this.toggleModal(path)
      return
    }

    const { history } = this.props
    history.push(path)
  }

  toggleModal = (modalType = false) => {
    this.setState({ modalType })
  }

  render() {
    const { user } = this.props
    const { modalType } = this.state

    return (
      <div>
        <Navbar handleClick={this.handleClick} links={LINKS} user={user} />

        {modalType && (
          <Modal onClose={() => this.toggleModal()} open={Boolean(modalType)}>
            <Modal.Header>{AUTH_MODAL_TITLE[modalType].title}</Modal.Header>
            <AuthContainer type={AUTH_MODAL_TITLE[modalType].type} />
          </Modal>
        )}
      </div>
    )
  }
}

NavbarContainer.propTypes = propTypes

export default connect(mapState)(withRouter(NavbarContainer))
