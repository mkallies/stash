import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveStore } from '../actions'
import AddStore from '../components/AddStore'
import PropTypes from 'prop-types'

export class AdminContainer extends Component {
  static propTypes = {
    saveStore: PropTypes.func.isRequired,
  }

  state = {}

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = () => {
    const { saveStore } = this.props

    saveStore(this.state)
  }

  render() {
    return (
      <AddStore
        handleInput={this.handleInput}
        handleSubmit={this.handleSubmit}
        values={this.state}
      />
    )
  }
}

export default connect(
  null,
  { saveStore }
)(AdminContainer)
