import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from './Navbar.css'

export const Navbar = () => {
  return (
    <aside className={style.aside}>
      <nav className={style.menu}>
        <ul>
          <li>
            <NavLink to={'/'}>Главная</NavLink>
          </li>
          <li>
            <NavLink to={'/documents'}>Документы</NavLink>
          </li>
          <li>
            <NavLink to={'/employee'}>Сотрудники</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
