import React from 'react'
import { Image, Card, Label, CardHeader } from 'semantic-ui-react'
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

interface IStrainMap {
  sativa: string
  hybrid: string
  indica: string
  [key: string]: string
}

const strainMap: IStrainMap = {
  sativa: 'yellow',
  hybrid: 'purple',
  indica: 'blue',
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
      <a href={url} target="_blank">
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

export { NewCard }
