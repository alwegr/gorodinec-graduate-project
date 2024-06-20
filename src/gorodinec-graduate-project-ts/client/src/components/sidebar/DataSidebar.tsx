import { IoDocumentsOutline } from "react-icons/io5"; 
import { GoPeople } from "react-icons/go"; 
import { IoBookmarksOutline } from "react-icons/io5";
import { PiSuitcaseSimple } from "react-icons/pi";

export const sidebarItems = [
    {
        path: '/documents',
        title: 'Документы',
        icon: <IoDocumentsOutline />
    },
    {
        path: '/counterparties',
        title: 'Контрагенты',
        icon: <PiSuitcaseSimple />
    },
    {
        path: '/employees',
        title: 'Сотрудники',
        icon: <GoPeople />
    },
    {
        path: '/referenceBook',
        title: 'Справочник',
        icon: <IoBookmarksOutline />
    },
]