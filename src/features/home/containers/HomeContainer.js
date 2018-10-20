import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllProducts, searchQuery } from '../actions'
import PropTypes from 'prop-types'
import { isLoading } from '../../../common/selectors'
import { getStartData } from '../selectors'
import { ProductCollection } from '../../../components/ProductCollection'
import { fetchUser } from '../../auth/actions'
import FilterBar from '../components/FilterBar'
import {
  HOME_PRODUCTS,
  INITIAL_STRAIN_STATE,
  INITIAL_PRICE_STATE,
} from '../constants'

const mapState = state => ({
  products: getStartData(state),
  isLoading: isLoading(state, HOME_PRODUCTS),
})

export class HomeContainer extends Component {
  static propTypes = {
    fetchAllProducts: PropTypes.func.isRequired,
    fetchUser: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    searchQuery: PropTypes.func.isRequired,
    products: PropTypes.array,
  }

  static defaultProps = {
    products: [],
  }

  state = {
    strainType: INITIAL_STRAIN_STATE,
    price: INITIAL_PRICE_STATE,
    weight: '',
    limit: 30,
    skip: 0,
  }

  componentDidMount() {
    const { fetchAllProducts, fetchUser } = this.props

    fetchUser()
    fetchAllProducts()
  }

  handleFilterClick = (type, value) => {
    this.setState({ [type]: value })
  }

  handleSearchClick = () => {
    const { searchQuery } = this.props
    const { strainType } = this.state

    const formattedStrainType = Object.keys(strainType).filter(
      key => strainType[key]
    )

    searchQuery({ ...this.state, strainType: formattedStrainType })
  }

  render() {
    const { products, isLoading } = this.props
    const { strainType, price, weight } = this.state

    return (
      <div>
        <FilterBar
          handleFilterClick={this.handleFilterClick}
          handleSearchClick={this.handleSearchClick}
          price={price}
          strainType={strainType}
          weight={weight}
        />
        <ProductCollection collection={products} isLoading={isLoading} />
      </div>
    )
  }
}

export default connect(
  mapState,
  { fetchAllProducts, fetchUser, searchQuery }
)(HomeContainer)
