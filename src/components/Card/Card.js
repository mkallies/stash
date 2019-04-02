import React from 'react'
import PropTypes from 'prop-types'
import capitalize from 'lodash/capitalize'

const propTypes = {
  className: PropTypes.string,
  product: PropTypes.object,
}

const defaultProps = {
  className: '',
  product: undefined,
}

const possibleGrams = [1, 3.5, 7, 14, 28]

const strainColourMap = {
  indica: 'blue-dark',
  hybrid: 'pink-dark',
  sativa: 'yellow-dark',
}

function Card({ className, product }) {
  if (!product) return null

  const { price, salePrice } = product

  const showSale = price !== salePrice && salePrice < price

  return (
    <a
      className={`xl:w-1/5 lg:w-1/3 md:w-2/5 sm:w-4/5 m-2 rounded overflow-hidden text-black hover:text-black shadow-lg border-b-2 border-${
        strainColourMap[product.productType]
      }`}
      href={product.url}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="h-64 flex justify-center items-center overflow-hidden">
        <img
          alt="Sunset in the mountains"
          className="w-full"
          src={product.images.thumb_src}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-5">{product.name}</div>
        <div className="font-bold text-l text-grey-darkest mb-5">
          {capitalize(product.productType)}
        </div>{' '}
        <p className="text-grey-darker text-base">{product.description}</p>
        <div className="font-bold text-l text-grey-darkest">Grams</div>
        <ul className="list-reset flex justify-between items-center w-full pt-2">
          {possibleGrams.map(g => {
            return (
              <li
                className={
                  g === product.grams
                    ? `bg-${
                      strainColourMap[product.productType]
                    } text-white rounded-full px-3 py-3 shadow-md text-center w-12`
                    : 'text-center w-12'
                }
                key={g}
              >
                {g}
              </li>
            )
          })}
        </ul>
        <div className="font-bold text-l text-grey-darkest mt-5">Price</div>
        <div className="px-6 py-4 flex justify-around items-center my-3">
          <span
            className={`mr-2 text-grey-darker ${
              showSale ? 'line-through' : ''
            }`}
          >
            <span className="text-3xl align-top">$</span>
            <span className="text-4xl">{product.price}</span>
          </span>
          {showSale && (
            <span className="mr-2 text-grey-darker font-bold rounded">
              <span className="text-3xl align-top">$</span>
              <span className="text-5xl">{product.salePrice}</span>
            </span>
          )}
        </div>
      </div>
    </a>
  )
}

Card.propTypes = propTypes
Card.defaultProps = defaultProps

export { Card }
