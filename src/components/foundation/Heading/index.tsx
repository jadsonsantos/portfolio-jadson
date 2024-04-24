import React from 'react'

type HeadingProps = React.ComponentProps<'h2'> & {
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Heading = ({ children, className, as = 'h2' }: HeadingProps) => {
  const customClassName = className ? `heading ${className}` : 'heading'
  const Element = as

  return <Element className={customClassName}>{children}</Element>
}

export default Heading
