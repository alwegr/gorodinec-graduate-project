import React, { useState } from 'react';
import { sidebarItems } from './DataSidebar'
import { Link, NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import './Sidebar_style.css'

function Sidebar({ children }: any) {

  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);

  };
    const activeStyle = {
    background: '#196FAD',
    color: 'white'
  } 
  
  return (
    <>
      <div className='container_sidebar'>
        <div style={{ width: isOpen ? '250px' : '50px' }} className='sidebar' >
          <div className='top_section'>
            <Link to='/' >
              <h1 style={{ display: isOpen ? 'block' : 'none' }} className='logo'>Документооборот</h1>
            </Link>
            <div style={{ marginLeft: isOpen ? '40px' : '0px' }} className='burger_menu'>
              <FiMenu onClick={toggle} />
            </div>
          </div>
          {
            sidebarItems.map((item, index) => (
              <NavLink to={item.path} key={index} className='link' aria-activedescendant='active' style={({isActive}) => isActive ? activeStyle : undefined }>
                <div className="icon">{item.icon}</div>
                <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text">{item.title}</div>
              </NavLink>
            ))
          }
        </div>
        <main>{children}</main>
      </div>
    </>

  );

}
export default Sidebar