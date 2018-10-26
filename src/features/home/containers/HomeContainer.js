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
import { getTruthyProperties } from '../../../utils/helpers'

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
    weight: undefined,
    limit: 30,
    skip: 0,
    currentPopover: undefined,
  }

  componentDidMount() {
    const { fetchAllProducts, fetchUser } = this.props

    fetchUser()
    fetchAllProducts()
  }

  handleFilterClick = (type, value, shouldClose) => {
    const newState = { [type]: value }

    if (shouldClose) {
      newState.currentPopover = undefined
    }

    this.setState(newState)
  }

  handleSearchClick = () => {
    const { searchQuery } = this.props
    const { strainType } = this.state

    const formattedStrainType = Object.keys(strainType).filter(
      key => strainType[key]
    )

    searchQuery({ ...this.state, strainType: formattedStrainType })
  }

  handlePopoverOpen = (e, { name }) => {
    this.setState({ currentPopover: name })
  }

  handlePopoverClose = () => {
    this.setState({ currentPopover: undefined })
  }

  render() {
    const { products, isLoading } = this.props
    const { currentPopover, strainType, price, weight } = this.state
    const selectedStrains = getTruthyProperties(strainType)

    return (
      <div>
        <FilterBar
          currentPopover={currentPopover}
          handleClose={this.handlePopoverClose}
          handleFilterClick={this.handleFilterClick}
          handleOpen={this.handlePopoverOpen}
          handleSearchClick={this.handleSearchClick}
          price={price}
          selectedStrains={selectedStrains}
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
