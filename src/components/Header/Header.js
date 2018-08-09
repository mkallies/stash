import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  title: PropTypes.string.isRequired,
  tag: PropTypes.string,
}

const defaultProps = {
  tag: 'h1',
}

const Header = ({ tag: Tag, title }) => {
  return (
    <div>
      <Tag>{title}</Tag>
    </div>
  )
}

Header.propTypes = propTypes
Header.defaultProps = defaultProps

export { Header }
