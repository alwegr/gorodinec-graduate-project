import { IoDocumentsOutline } from "react-icons/io5"; 
import { GoPeople } from "react-icons/go"; 
import { IoSettingsOutline } from "react-icons/io5"; 
// import { IoMdArrowDropright } from "react-icons/io";

export const sidebarItems = [
    {
        path: '/documents',
        title: 'Документы',
        icon: <IoDocumentsOutline />
    },
    {
        path: '/employees',
        title: 'Сотрудники',
        icon: <GoPeople />
    },
   
]