import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import style from './Navbar.css'
import { IoDocumentsOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { IoMenu } from "react-icons/io5";



export const Navbar = ({children}) => {
  const [isOpen, setIsOpen] = useState(true);
    function toggle() {
        setIsOpen(!isOpen);
    }

  const menuItem=[
    {
      path: '/documents',
      name: 'Документы',
      icon: <IoDocumentsOutline/>
    },
    {
      path: '/employee',
      name: 'Сотрудники',
      icon: <GoPeople/>
    }
  ]
  return (
    <div className='container'>
      <aside style={{ width: isOpen ? '300px' : '50px' }} className={style.sidebar}>
        <div className={style.top_section}>
          <Link to='/'>
            <h1 style={{ display: isOpen ? 'block' : 'none' }} className={style.logo}>Logo</h1>
          </Link>
          <div style={{ marginLeft: isOpen ? '130px' : '0px' }} className={style.bars}>
            <IoMenu onClick={toggle} />
          </div>
        </div>
        <div>
        {
          menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className={style.link} aria-activedescendant='active'>
              <div className={style.icon}>{item.icon}</div>
              <div style={{ display: isOpen ? 'block' : 'none' }} className={style.link_text}>{item.name}</div>
            </NavLink>
          ))
        }
        </div>
      </aside>
      <main>{children}</main>
    </div>
    
    
  )
}
