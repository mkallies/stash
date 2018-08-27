import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import Navbar from '../components/Navbar'
import { LINKS } from '../constants'

const propTypes = {
  history: PropTypes.object.isRequired,
}

export class NavbarContainer extends Component {
  handleClick = path => {
    const { history } = this.props
    history.push(path)
  }

  render() {
    return <Navbar handleClick={this.handleClick} links={LINKS} />
  }
}

NavbarContainer.propTypes = propTypes

export default withRouter(NavbarContainer)
