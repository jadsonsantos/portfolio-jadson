import React from 'react'

type HeadingProps = React.ComponentProps<'h2'> & {
  className?: string
}

const Heading = ({ children, className }: HeadingProps) => {
  return <h2 className={`heading ${className || ''}`}>{children}</h2>
}

export default Heading
