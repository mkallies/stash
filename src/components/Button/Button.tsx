import React from 'react'
import classnames from 'classnames'

type ButtonProps = {
  className: string
  children: React.ReactNode
  content: React.ReactNode
  withBorder: boolean
  withPadding: boolean
}

function Button({
  className,
  children,
  content,
  withBorder,
  withPadding,
  ...props
}: ButtonProps) {
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

export { Button }
