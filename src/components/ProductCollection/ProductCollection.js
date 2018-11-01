import React from 'react'
import PropTypes from 'prop-types'
import { NewCard } from '../Card'
import isEmpty from 'lodash/isEmpty'
import { Loader, Card } from 'semantic-ui-react'
import styles from './productCollection.css'

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
    <Card.Group className={styles.productContainer} itemsPerRow={4}>
      {collection.map((result, idx) => (
        <NewCard className={styles.productItem} key={idx} product={result} />
      ))}
    </Card.Group>
  )
}

ProductCollection.propTypes = propTypes
ProductCollection.defaultProps = defaultProps

export { ProductCollection }
