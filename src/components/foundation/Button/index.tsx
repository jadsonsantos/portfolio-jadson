import React from 'react'

import styles from './Button.module.scss'

type ButtonProps = React.ComponentProps<'button'>

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  )
}

export default Button
