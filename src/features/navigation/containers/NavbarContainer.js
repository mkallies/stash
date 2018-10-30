import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Navbar from '../components/Navbar'
import { LINKS } from '../constants'
import { getUser } from '../../auth/selectors'
import { Modal } from 'semantic-ui-react'
import AuthContainer from '../../auth/containers/AuthContainer'
import { withRouter } from 'react-router'
import { logout } from '../../auth/actions'

const PATHS_FOR_AUTH_MODALS = ['/login', '/sign-up']

const AUTH_MODAL_TITLE = {
  '/login': {
    type: 'login',
  },
  '/sign-up': {
    type: 'signup',
  },
}

const mapState = state => ({
  user: getUser(state),
})

export class NavbarContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
    user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
  }

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

  handleLogout = () => {
    const { logout } = this.props

    logout()
  }

  render() {
    const { user } = this.props
    const { modalType } = this.state

    return (
      <div>
        <Navbar
          handleClick={this.handleClick}
          handleLogout={this.handleLogout}
          links={LINKS}
          user={user}
        />

        {modalType && (
          <Modal onClose={() => this.toggleModal()} open={Boolean(modalType)}>
            <AuthContainer
              closeModal={this.toggleModal}
              type={AUTH_MODAL_TITLE[modalType].type}
            />
          </Modal>
        )}
      </div>
    )
  }
}

export default connect(
  mapState,
  { logout }
)(withRouter(NavbarContainer))
