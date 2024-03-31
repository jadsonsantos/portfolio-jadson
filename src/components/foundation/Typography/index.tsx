import React from 'react'

type TypographyProps = React.ComponentProps<'p'> & {
  className?: React.ReactNode
}

const Typography = ({ className, children }: TypographyProps) => {
  return <p className={`typography ${className || ''}`}>{children}</p>
}

export default Typography
