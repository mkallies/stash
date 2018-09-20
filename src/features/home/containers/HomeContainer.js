import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllProducts } from '../../search/actions'
import PropTypes from 'prop-types'
import { isLoading } from '../../../common/selectors'
import { getStartData } from '../../search/selectors'
import Home from '../components/Home'
import { fetchUser } from '../../auth/actions'

const mapState = state => ({
  categories: getStartData(state),
  isLoading: isLoading(state, 'startProducts'),
})

export class HomeContainer extends Component {
  static propTypes = {
    fetchAllProducts: PropTypes.func.isRequired,
    fetchUser: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    categories: PropTypes.array,
  }

  static defaultProps = {
    categories: [],
  }

  componentDidMount() {
    const { fetchAllProducts, fetchUser } = this.props

    fetchUser()
    fetchAllProducts()
  }

  render() {
    const { categories, isLoading } = this.props
    return <Home categories={categories} isLoading={isLoading} />
  }
}

export default connect(
  mapState,
  { fetchAllProducts, fetchUser }
)(HomeContainer)
