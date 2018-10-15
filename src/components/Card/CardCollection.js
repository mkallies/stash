import React from 'react'
import PropTypes from 'prop-types'
import { NewCard } from '../../../components/Card'
import capitalize from 'lodash/capitalize'
import styles from '../../home/home.css'

const propTypes = {
  isLoading: PropTypes.bool.isRequired,
  searchResults: PropTypes.array.isRequired,
}

const CardCollection = ({ searchResults, isLoading }) => {
  if (isLoading) {
    return <div>LOADING</div>
  }

  return (
    <div className={styles.productContainer}>
      {searchResults.map(result => {
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

CardCollection.propTypes = propTypes

export default CardCollection
