import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './TabDocuments_style.css'

function TabDocumentsPage() {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState<string>("");

  useEffect(() => {
    const path = location.pathname;
    setActiveMenu(path);
  }, [location]);
  return (
    <>
        <div className="tab_document">
        <nav className="menu_document">
          <ul>
            <li
              className={
                activeMenu === `/documents`
                  ? "active"
                  : ""
              }
            >
              <Link to={`/documents`}>
                Трудовой договор
              </Link>
            </li>
            <li
              className={
                activeMenu === `/documents/serviceNote`
                  ? "active"
                  : ""
              }
            >
              <Link to={`/documents/serviceNote`}>
                Служебная записка
              </Link>
            </li>
            <li
              className={
                activeMenu === `/documents/contract`
                  ? "active"
                  : ""
              }
            >
              <Link to={`/documents/contract`}>Договор</Link>
            </li>
            {/* <li
              className={
                activeMenu === `/documents/file` 
                ? "active" 
                : ""
              }
            >
              <Link to={`/documents/file`}>Загрузить файл</Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default TabDocumentsPage;
