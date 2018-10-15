import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getSearchResults } from '../selectors'
import { ProductCollection } from '../../../components/ProductCollection'
import { isLoading } from '../../../common/selectors'

const mapState = state => ({
  isLoading: isLoading(state, 'searching'),
  results: getSearchResults(state),
})

export class SearchResultsContainer extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    results: PropTypes.array.isRequired,
  }

  render() {
    const { isLoading, results } = this.props

    return (
      <ProductCollection
        collection={results}
        emptyCollectionMsg="No search results"
        isLoading={isLoading}
      />
    )
  }
}

export default connect(mapState)(SearchResultsContainer)
