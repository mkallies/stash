import React from 'react'
import PropTypes from 'prop-types'
import { Card, Image } from 'semantic-ui-react'

const propTypes = {
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
  subtitle: PropTypes.string,
}

const defaultProps = {
  href: '',
  subtitle: '',
}

const NewCard = ({ title, subtitle, content, href, imgSrc }) => {
  return (
    <Card href={href} target="_blank">
      <Image src={imgSrc} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>

        <Card.Meta>{subtitle}</Card.Meta>

        <Card.Description>{content}</Card.Description>
      </Card.Content>
    </Card>
  )
}

NewCard.propTypes = propTypes
NewCard.defaultProps = defaultProps

export { NewCard }
