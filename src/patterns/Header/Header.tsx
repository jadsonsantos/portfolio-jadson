import Image from 'next/image'
import Link from 'next/link'

import Menu from 'components/Menu'

import styles from './Header.module.scss'

import logoIcon from '../../../public/logo.svg'
import { menu } from './data'

const Header = () => (
  <header className={styles.header}>
    <div className="container">
      <nav className={styles.header__nav}>
        <Link href="/" className={styles.header__item}>
          <Image
            src={logoIcon}
            alt="Logo contendo o nome Jadson"
            className={styles.header__logo}
          />
        </Link>
        <Menu menuItems={menu} />
      </nav>
    </div>
  </header>
)

export default Header
