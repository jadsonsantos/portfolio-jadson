'use client'

import Link from 'next/link'
import { useState } from 'react'

import styles from './Menu.module.scss'

import { navigation } from 'config/profile'
import { Menu as MenuIcon, X } from 'lucide-react'

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      <ul
        className={`${styles.menu} ${isMenuOpen ? styles['menu--open'] : ''}`}
      >
        {navigation.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className={styles.menu__link}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <button
        className={styles.menu__toggle}
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
      >
        {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
      </button>
    </>
  )
}

export default Menu
