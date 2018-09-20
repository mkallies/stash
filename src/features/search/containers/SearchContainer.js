import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FilterBar from '../components/FilterBar'
import { Button } from 'semantic-ui-react'
import { searchQuery } from '../actions'

export class SearchContainer extends Component {
  static propTypes = {
    searchQuery: PropTypes.func.isRequired,
  }

  state = {
    strainType: '',
    price: [0, 100],
    weight: '',
    limit: 30,
    skip: 0,
  }

  handleFilterClick = (type, value) => {
    console.log(type, value)
    this.setState({ [type]: value })
  }

  handleSearchClick = () => {
    // dispatch action with current state
    const { searchQuery } = this.props

    searchQuery(this.state)
  }

  render() {
    const { strainType, price, weight } = this.state

    return (
      <div>
        <div>
          <FilterBar
            handleFilterClick={this.handleFilterClick}
            price={price}
            strainType={strainType}
            weight={weight}
          />
        </div>
        <Button onClick={this.handleSearchClick}>Search</Button>
      </div>
    )
  }
}

export default connect(
  null,
  { searchQuery }
)(SearchContainer)
