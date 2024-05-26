import React from 'react'

type TypographyProps = React.ComponentProps<'p'> & {
  className?: React.ReactNode
  as?: 'p' | 'div'
}

const Typography = ({ className, children, as = 'p' }: TypographyProps) => {
  const Element = as

  return (
    <Element className={`typography ${className || ''}`}>{children}</Element>
  )
}

export default Typography
