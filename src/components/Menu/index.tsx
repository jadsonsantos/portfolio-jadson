import styles from './Menu.module.scss'

import { menu } from './data'

const Menu = () => (
  <ul className={styles.menu}>
    {menu.map(({ title, link }) => (
      <li key={title} className={styles.menu__item}>
        <a href={link}>{title}</a>
      </li>
    ))}
  </ul>
)

export default Menu
