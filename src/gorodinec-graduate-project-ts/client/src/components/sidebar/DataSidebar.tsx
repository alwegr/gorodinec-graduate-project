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
    // {
    //     path: '/setting',
    //     title: 'Панель упарвления',
    //     icon: <IoSettingsOutline />
    // }
    // {
    //     path: '#',
    //     title: 'Панель упраления',
    //     icon:  <IoSettingsOutline />,
    //     arrow: <IoMdArrowDropright />,
    //     listItems: [
    //         {
    //             title: 'Сотрудники',
    //             path: '#',
    //             arrow: <IoMdArrowDropright />,
    //             sectionList: [
    //                 {
    //                     title: 'Статус сотрудников',
    //                     path: '/employeeStatus', 
    //                 },
    //                 {
    //                     title: 'Должность',
    //                     path: '/position', 
    //                 },
    //                 {
    //                     title: 'Подразделения',
    //                     path: '/divisions', 
    //                 }
    //             ]
    //         }
    //         {
    //             title: 'Документы',
    //             arrow: <MdKeyboardArrowDown />,
    //             sectionList: [
    //                 {
    //                     title: 
    //                 }
    //             ]
    //         }
    //     ]
    // }
]