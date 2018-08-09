import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import Navbar from '../components/Navbar'

const propTypes = {
  history: PropTypes.object.isRequired,
}

const links = [
  { name: 'Home', path: '/' },
  { name: 'Discover', path: '/discover' },
  { name: 'My Stash', path: '/my-stash' },
  { name: 'Friends', path: '/friends' },
  { name: 'Search', path: '/search' },
]

export class NavbarContainer extends Component {
  handleClick = path => {
    const { history } = this.props
    history.push(path)
  }

  render() {
    return <Navbar handleClick={this.handleClick} links={links} />
  }
}

NavbarContainer.propTypes = propTypes

export default withRouter(NavbarContainer)
