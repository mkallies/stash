import React from 'react'
import PropTypes from 'prop-types'
import { NewCard } from '../../../components/Card'
import { Header } from 'semantic-ui-react'
import capitalize from 'lodash/capitalize'

const propTypes = {
  categories: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

const Home = ({ categories, isLoading }) => {
  console.log('cat', categories)
  if (isLoading) {
    return <div>LOADING</div>
  }

  return (
    <div>
      {categories.map(cat => {
        return (
          <div key={cat.type}>
            <Header>{cat.type}</Header>
            <div>
              {cat.products.map(product => (
                <NewCard
                  content={product.description}
                  href={product.url}
                  imgSrc={product.images.thumb_src}
                  key={product._id}
                  subtitle={capitalize(product.productType)}
                  title={product.name}
                />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

Home.propTypes = propTypes

export default Home
