import React from 'react'
import PropTypes from 'prop-types'
import { Card, Image } from 'semantic-ui-react'

const propTypes = {
  content: PropTypes.string.isRequired,
  grams: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
  salePrice: PropTypes.number,
  subtitle: PropTypes.string,
}

const defaultProps = {
  className: '',
  href: '',
  salePrice: undefined,
  subtitle: '',
}

const NewCard = ({
  className,
  title,
  subtitle,
  content,
  href,
  imgSrc,
  price,
  salePrice,
  grams,
}) => {
  return (
    <Card className={className} href={href} target="_blank">
      <Image src={imgSrc.thumb_src} />
      <Card.Content>
        <Card.Header>
          {title} - {`${grams} g`}
        </Card.Header>

        <Card.Meta>{subtitle}</Card.Meta>

        <Card.Description>{content}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Card.Content>Price - {price}</Card.Content>
        {price !== salePrice &&
          salePrice < price && <span>On sale - {salePrice}</span>}
      </Card.Content>
    </Card>
  )
}

NewCard.propTypes = propTypes
NewCard.defaultProps = defaultProps

export { NewCard }
