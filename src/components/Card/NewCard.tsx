import React from 'react'
import { Image } from 'semantic-ui-react'
import capitalize from 'lodash/capitalize'
import classnames from 'classnames'
import styles from './card.css'

type Product = {
  price: number
  salePrice: number
  url: string
  name: string
  productType: string
  description: string
  grams: number
  images: {
    thumb_src: string
  }
}

const NewCard = ({
  className,
  product,
}: {
className?: string
product: Product
}) => {
  const {
    price,
    salePrice,
    productType,
    url,
    name,
    description,
    grams,
    images,
  } = product

  const showSale = price !== salePrice && salePrice < price

  const classes = classnames(styles.card, className)

  return (
    <a className={classes} href={url} target="_blank">
      <div className={styles.imageContainer}>
        <Image src={images.thumb_src} />
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.productType}>{capitalize(productType)}</div>
        <div className={styles.name}>{name}</div>
        <div className={styles.priceMsg}>{`$${price} CAD per ${grams} g`}</div>
      </div>
    </a>
  )
}

export { NewCard }
