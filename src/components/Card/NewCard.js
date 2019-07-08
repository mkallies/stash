import React from 'react'
import { Image, Card, Label, CardHeader } from 'semantic-ui-react'
import styles from './card.css'
import PropTypes from 'prop-types'

const strainMap = {
  sativa: 'yellow',
  hybrid: 'purple',
  indica: 'blue',
}

const NewCard = ({ product }) => {
  const {
    price,
    // salePrice,
    productType,
    url,
    name,
    // description,
    grams,
    images,
  } = product

  return (
    <Card className={styles.card}>
      <a href={url} rel="noopener noreferrer" target="_blank">
        <Image
          label={{
            color: strainMap[productType],
            content: productType,
            icon: 'tree',
            ribbon: true,
          }}
          src={images.thumb_src}
        />
      </a>
      <Card.Content>
        <CardHeader>{name}</CardHeader>
        <Card.Description>
          <Label color="green" horizontal>
            {grams}g
          </Label>
          <Label color="red" horizontal>
            ${price}
          </Label>
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

NewCard.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.string,
    productType: PropTypes.string,
    grams: PropTypes.string,
    images: PropTypes.shape({
      thumb_src: PropTypes.string,
    }),
    name: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
}

export { NewCard }
