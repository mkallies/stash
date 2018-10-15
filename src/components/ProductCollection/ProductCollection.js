import React from 'react'
import PropTypes from 'prop-types'
import { NewCard } from '../Card'
import capitalize from 'lodash/capitalize'
import isEmpty from 'lodash/isEmpty'
import styles from './productCollection.css'
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
    <div className={styles.productContainer}>
      {collection.map(result => {
        return (
          <NewCard
            className={styles.productItem}
            content={result.product.description}
            grams={result.grams}
            href={result.url}
            imgSrc={result.product.images}
            key={result.id}
            price={result.price}
            salePrice={result.salePrice}
            subtitle={capitalize(result.product.productType)}
            title={result.product.name}
          />
        )
      })}
    </div>
  )
}

ProductCollection.propTypes = propTypes
ProductCollection.defaultProps = defaultProps

export { ProductCollection }
