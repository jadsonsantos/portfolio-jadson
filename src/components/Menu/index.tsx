import styles from './Menu.module.scss'

interface MenuItem {
  title: string
  link?: string
}

interface MenuProps {
  menuItems: MenuItem[]
}

const Menu = ({ menuItems }: MenuProps) => (
  <ul className={styles.menu}>
    {menuItems.map(({ title, link }) => (
      <li key={title} className={styles.menu__item}>
        <a href={link}>{title}</a>
      </li>
    ))}
  </ul>
)

export default Menu
