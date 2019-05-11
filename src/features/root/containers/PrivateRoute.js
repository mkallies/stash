import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { getUser } from '../../auth/selectors'
import PropTypes from 'prop-types'

const mapState = state => ({
  user: getUser(state),
})

class PrivateRoute extends Component {
  static propTypes = {
    component: PropTypes.node.isRequired,
    user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
  }

  render() {
    const { component: Component, user, ...rest } = this.props

    console.log('fsdfsdfsdfsdf', user)

    return (
      <Route
        {...rest}
        render={() =>
          user ? <Component {...this.props} /> : <Redirect to="/" />
        }
      />
    )
  }
}

export default connect(mapState)(PrivateRoute)
