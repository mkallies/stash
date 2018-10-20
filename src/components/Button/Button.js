import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

function Button({
  className,
  children,
  content,
  withBorder,
  withPadding,
  ...props
}) {
  const classes = classnames(
    'bg-white text-grey-darkest font-semibold',
    { 'border border-grey-light': withBorder },
    { 'py-2 px-4': withPadding },
    className
  )

  const contentToRender = children || content

  return (
    <button className={classes} {...props}>
      {contentToRender}
    </button>
  )
}

Button.defaultProps = {
  type: 'button',
}

Button.propTypes = {
  type: PropTypes.string,
}

export { Button }
