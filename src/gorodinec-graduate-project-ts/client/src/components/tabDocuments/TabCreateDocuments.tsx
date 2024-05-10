import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import './TabCreateDocuments_style.css'

function TabCreateDocuments(){



    // const activeStyle = {
    //     background: '#196FAD',
    //     color: 'white'
    // } style={({isActive} : any) => isActive ? activeStyle }

    return(
        <>
            <div className="tab_container">
                <nav className="menu">
                    <ul>
                        <li>
                            <Link to={`/documents/createDocument/employmentСontract`} >
                                Трудовой договор
                            </Link>
                        </li>
                        <li>
                            <Link to={`/documents/createDocument/serviceNote`}>
                                Служебная записка
                            </Link>
                        </li>
                        <li>
                            <Link to={`/documents/createDocument/contract`}>
                                Договор
                            </Link>
                        </li>
                        <li>
                            <Link to={`/documents/createDocument/file`}>
                                Загрузить файл
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
} 
export default TabCreateDocuments