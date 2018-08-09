import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledCard = styled.div`
  background-color: 'red';
`

const defaultProps = {
  test: 'test',
}

const propTypes = {
  test: PropTypes.string,
}

function Card({ test, ...htmlProps }) {
  return <StyledCard {...htmlProps} />
}

Card.defaultProps = defaultProps

Card.propTypes = propTypes

export { Card }
