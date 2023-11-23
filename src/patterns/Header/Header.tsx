import Image from 'next/image'
import Link from 'next/link'

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
        <ul className={styles.header__menu}>
          {menu.map(({ title }) => (
            <li key={title} className={styles.header__item}>
              {title}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
