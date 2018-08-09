import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledInput = styled.input`
  height: 100%;
  width: 100%;
`

const Input = ({ type, ...props }) => {
  return <StyledInput type={type} {...props} />
}

Input.defaultProps = {
  type: 'text',
}

Input.propTypes = {
  type: PropTypes.string,
}

export { Input }
