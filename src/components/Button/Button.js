import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  outline: none;
  height: 100%;
  border: none;
  vertical-align: baseline;
  background: transparent;
  margin: 0px;
  padding: 0px 0.8px;
  text-transform: none;
  text-shadow: none;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  font-size: ${({ fontSize }) => `${fontSize}px` || 14};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  color: rgb(72, 72, 72, 0.9);
`

function Button({ type, ...props }) {
  return (
    <StyledButton type={type}
      {...props} />
  )
}

Button.defaultProps = {
  type: 'button',
}

Button.propTypes = {
  type: PropTypes.string,
}

export { Button }
