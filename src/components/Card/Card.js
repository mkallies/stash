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
  const { price, salePrice } = product

  const showSale = price !== salePrice && salePrice < price

  return (
    <div
      className={`xl:w-1/5 lg:w-1/3 md:w-2/5 sm:w-4/5 m-2 rounded overflow-hidden shadow-lg border-b-2 border-${
        strainColourMap[product.productType]
      }`}
    >
      <div className="h-64 flex justify-center items-center overflow-hidden">
        <img
          alt="Sunset in the mountains"
          className="w-full"
          src={product.images.thumb_src}
        />
      </div>
      <div className="px-6 py-4">
        <div className="flex justify-between">
          <div className="font-bold text-xl mb-5">{product.name}</div>
          <div className="font-bold text-xl mb-5">
            {capitalize(product.productType)}
          </div>
        </div>
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
    </div>
  )
}

Card.propTypes = propTypes
Card.defaultProps = defaultProps

export { Card }
