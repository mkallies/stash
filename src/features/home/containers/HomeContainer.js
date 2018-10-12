import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllProducts } from '../actions'
import PropTypes from 'prop-types'
import { isLoading } from '../../../common/selectors'
import { getStartData } from '../selectors'
import Home from '../components/Home'
import { fetchUser } from '../../auth/actions'

const mapState = state => ({
  products: getStartData(state),
  isLoading: isLoading(state, 'startProducts'),
})

export class HomeContainer extends Component {
  static propTypes = {
    fetchAllProducts: PropTypes.func.isRequired,
    fetchUser: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    products: PropTypes.array,
  }

  static defaultProps = {
    products: [],
  }

  componentDidMount() {
    const { fetchAllProducts, fetchUser } = this.props

    fetchUser()
    fetchAllProducts()
  }

  render() {
    const { products, isLoading } = this.props
    return <Home isLoading={isLoading} products={products} />
  }
}

export default connect(
  mapState,
  { fetchAllProducts, fetchUser }
)(HomeContainer)
