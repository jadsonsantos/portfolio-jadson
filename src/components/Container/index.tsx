import React from 'react'

type ContainerProps = React.ComponentProps<'div'> & {
  className?: string
}

const Container = ({ children, className }: ContainerProps) => {
  const customClass = className ? `container ${className}` : 'container'

  return <div className={customClass}>{children}</div>
}

export default Container
