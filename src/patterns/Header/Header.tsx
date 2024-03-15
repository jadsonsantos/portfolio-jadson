import Logo from 'components/Logo'
import Menu from 'components/Menu'

import styles from './Header.module.scss'

const Header = () => (
  <header className={styles.header}>
    <div className="container">
      <nav className={styles.header__nav}>
        <Logo />
        <Menu />
      </nav>
    </div>
  </header>
)

export default Header
