import Link from 'next/link'

import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      &lt;jadson/&gt;
    </Link>
  )
}

export default Logo
