import React from 'react'
import PropTypes from 'prop-types'
import { Card } from '../Card'
import isEmpty from 'lodash/isEmpty'
import { Loader } from 'semantic-ui-react'

const propTypes = {
  collection: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  emptyCollectionMsg: PropTypes.string,
}

const defaultProps = {
  emptyCollectionMsg: 'No products found',
}

const ProductCollection = ({ collection, emptyCollectionMsg, isLoading }) => {
  if (isLoading) {
    return <Loader />
  }

  if (isEmpty(collection)) {
    return <div>{emptyCollectionMsg}</div>
  }

  return (
    <div className="flex flex-wrap justify-between mb-4 px-24 py-20">
      {collection.map(result => {
        return <Card key={result.id} product={result} />
      })}
    </div>
  )
}

ProductCollection.propTypes = propTypes
ProductCollection.defaultProps = defaultProps

export { ProductCollection }
