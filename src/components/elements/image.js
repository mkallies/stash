import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { alignSelf, margin, layout } from 'styled-system'

const propTypes = {
  alt: PropTypes.string,
  height: PropTypes.string,
  maxWidth: PropTypes.string,
}

const StyledImg = styled.img`
  ${alignSelf}
  ${margin}
  ${layout}
`

const Img = ({ maxWidth, height, alt, ...rest }) => {
  return <StyledImg alt={alt} height={height} maxWidth={maxWidth} {...rest} />
}

Img.propTypes = propTypes

Img.defaultProps = {
  alt: '',
  height: 'auto',
  maxWidth: '100%',
}

export { Img }
