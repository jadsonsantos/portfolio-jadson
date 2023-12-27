import React from 'react'

import styles from '../../patterns/Header/Header.module.scss'

interface MenuItem {
  title: string
  link?: string
}

interface MenuProps {
  menuItems: MenuItem[]
}

const Menu = ({ menuItems }: MenuProps) => (
  <ul className={styles.header__menu}>
    {menuItems.map(({ title, link }) => (
      <li key={title} className={styles.header__item}>
        <a href={link}>{title}</a>
      </li>
    ))}
  </ul>
)

export default Menu
