import React from 'react'
import PropTypes from 'prop-types'
import { NewCard } from '../../../components/Card'
import capitalize from 'lodash/capitalize'
import styles from '../home.css'

const propTypes = {
  isLoading: PropTypes.bool.isRequired,
  products: PropTypes.array.isRequired,
}

const Home = ({ products, isLoading }) => {
  if (isLoading) {
    return <div>LOADING</div>
  }

  return (
    <div className={styles.productContainer}>
      {products.map(prod => {
        return (
          <NewCard
            className={styles.productItem}
            content={prod.product.description}
            grams={prod.grams}
            href={prod.url}
            imgSrc={prod.product.images}
            key={prod.id}
            price={prod.price}
            salePrice={prod.salePrice}
            subtitle={capitalize(prod.product.productType)}
            title={prod.product.name}
          />
        )
      })}
    </div>
  )
}

Home.propTypes = propTypes

export default Home
