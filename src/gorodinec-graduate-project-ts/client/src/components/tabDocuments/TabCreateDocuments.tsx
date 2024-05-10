import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import "./TabCreateDocuments_style.css";

function TabCreateDocuments() {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState<string>("");

  useEffect(() => {
    const path = location.pathname;
    setActiveMenu(path);
  }, [location]);

  return (
    <>
      <div className="tab_container">
        <nav className="menu">
          <ul>
            <li
              className={
                activeMenu === `/documents/createDocument/employmentСontract`
                  ? "active"
                  : ""
              }
            >
              <Link to={`/documents/createDocument/employmentСontract`}>
                Трудовой договор
              </Link>
            </li>
            <li
              className={
                activeMenu === `/documents/createDocument/serviceNote`
                  ? "active"
                  : ""
              }
            >
              <Link to={`/documents/createDocument/serviceNote`}>
                Служебная записка
              </Link>
            </li>
            <li
              className={
                activeMenu === `/documents/createDocument/contract`
                  ? "active"
                  : ""
              }
            >
              <Link to={`/documents/createDocument/contract`}>Договор</Link>
            </li>
            <li
              className={
                activeMenu === `/documents/createDocument/file` 
                ? "active" 
                : ""
              }
            >
              <Link to={`/documents/createDocument/file`}>Загрузить файл</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default TabCreateDocuments;
