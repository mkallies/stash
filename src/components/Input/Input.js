import React from 'react'
import PropTypes from 'prop-types'
import styles from './input.css'

const Input = ({ type, ...props }) => {
  return <input className={styles.input} type={type} {...props} />
}

Input.defaultProps = {
  type: 'text',
}

Input.propTypes = {
  type: PropTypes.string,
}

export { Input }
