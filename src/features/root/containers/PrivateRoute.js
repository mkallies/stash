import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
// import * as auth from '../../auth'

// const { getAuthDetails } = auth.selectors

// const mapState = state => ({
//   auth: getAuthDetails(state)
// })

// class PrivateRoute extends Component {
//   render() {
//     const { auth: { isAuthenticated }, component: Component } = this.props

//     return isAuthenticated ?
//       <Component {...this.props} />
//       : <Redirect to='/login' />
//   }
// }

// export default connect(mapState)(PrivateRoute)