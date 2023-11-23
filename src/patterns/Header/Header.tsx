import Link from 'next/link'

import styles from './Header.module.scss'

import { menu } from './data'

const Header = () => (
  <header className={styles.header}>
    <div className="container">
      <nav className={styles.header__nav}>
        <Link href="/" className={styles.header__item}>
          jadson
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
