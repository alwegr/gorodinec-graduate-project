import React, { useState } from 'react';
import { sidebarItems } from './DataSidebar'
import { Link, NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import './Sidebar_style.css'

function Sidebar({ children }: any) {

  const [isOpen, setIsOpen] = useState(true);
  // const [isMenuOpen, setIsMenuOpen] = useState(new Array(sidebarItems.length).fill(false));
  // const [isSubMenuOpen, setIsSubMenuOpen] = useState(new Array(sidebarItems.length).fill(false));

  const toggle = () => {
    setIsOpen(!isOpen);

  };
    const activeStyle = {
    background: '#196FAD',
    color: 'white'
  } 


  // const toggleMenu = (index: any) => {
  //   setIsMenuOpen((prevState) => {
  //     const newState = [...prevState];
  //     newState[index] = !newState[index];
  //     return newState;
  //   });
  // };

  // const toggleMenuSub = (index: any) => {
  //   setIsSubMenuOpen((prevsub) => {
  //     const newStateSub = [...prevsub];
  //     newStateSub[index] = !newStateSub[index];
  //     return newStateSub;
  //   });
  // };

  // const activeStyle = {
  //   background: '#196FAD',
  //   color: 'white'
  // } style={({isActive}) => isActive ? activeStyle : undefined }

  // const sectionList = (sectionList: any) => {
  //   return sectionList.map((sectionList: any, index: any) => (
  //     <>
  //       <div>
  //         <NavLink to={sectionList.path} key={index} className="subSublink" >
  //           <div style={{ display: isOpen ? 'block' : 'none' }} className="subSublink_text">
  //             {sectionList.title}
  //           </div>
  //         </NavLink>
  //       </div>
  //     </>
  //   ));
  // }

  // const rendersubSections = (listItems: any) => {

  //   return listItems.map((listItems: any, index: any) => (
  //     <div className="subnav">
  //       <NavLink to={listItems.path || '#'} key={index} className="sublink" onClick={() => toggleMenuSub(index)} >
  //         <div className="sublink_text" style={{ display: isOpen ? 'block' : 'none' }}>
  //           {listItems.title}
  //           <div className={isSubMenuOpen[index] ? 'subArrow rotate' : 'subArrow'}>{listItems.arrow}</div>

  //         </div>

  //       </NavLink>
  //       {isSubMenuOpen[index] && listItems.sectionList && (
  //         <div>
  //           {sectionList(listItems.sectionList)}
  //         </div>
  //       )}
  //     </div>
  //   ));
  // };

  // const renderSections = () => {
  //   return sidebarItems.map((item, index) => (
  //     <NavLink to={item.path} key={index}>
  //       <NavLink
  //         to={item.path || '#'}
  //         key={index}
  //         className={isOpen ? "link open" : "link "}
  //         onClick={() => toggleMenu(index)}

  //       >
  //         <div className="icon">{item.icon}</div>
  //         <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text">
  //           {item.title}
  //         </div>
  //         <div style={{ display: isOpen ? 'block' : 'none' }} className={isMenuOpen[index] ? 'arrow rotate' : 'arrow'}>{item.arrow}</div>
  //       </NavLink>
  //       {
  //         isMenuOpen[index] && item.listItems && (
  //           <>
  //             {rendersubSections(item.listItems)}
  //           </>
  //         )
  //       }
  //     </NavLink>

  //   ))
  // };
  // return (
  //   <>
  //     <div className="container_sidebar">
  //       <div style={{ width: isOpen ? '250px' : '50px' }} className="sidebar">
  //         <div className="top_section" >
  //           <Link to="/" >
  //             <h1 style={{ display: isOpen ? 'block' : 'none' }} className="logo">
  //               Документооборот
  //             </h1>
  //           </Link>
  //           <div style={{ marginLeft: isOpen ? '40px' : '0px' }} className="burger_menu">
  //             <FiMenu onClick={toggle} />
  //           </div>
  //         </div>
  //         <div>{renderSections()}</div>

  //       </div >
  //       <main>{children}</main>
  //     </div >
  //   </>
  // );

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