import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import { AiOutlineDelete } from "react-icons/ai";
// import { FiEdit2 } from "react-icons/fi";
import { Link } from 'react-router-dom';
import './Employees_style.css'


interface Employee {
  _id: string,
  lastName: string,
  firstName: string,
  middleName: string,
  gender: string;
  personnelNumber: number,
  position: {
    title: string;
  };
  divisions: {
    title: string
  },
  // employeeStatus: {
  //   title: string;
  // };
}


function EmployeesPage() {
  const [dataEmployee, setDataEmployee] = useState<Employee[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  // const [filter, setFilter] = useState<string>("");
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);


  useEffect(() => {
    axios
      .get('http://localhost:3001/get/employees')
      .then((res) => {
        setDataEmployee(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  


  // const handleDelete = (id: string) => {
  //   axios
  //     .delete(`http://localhost:3001/delete/employees/${id}`)
  //     .then((res) => {
  //       console.log(res);
  //       // Обновляем данные после удаления сотрудника
  //       setDataEmployee(dataEmployee.filter((employee) => employee._id !== id));
  //     })
  //     .catch((err) => console.log(err));
  // };

  useEffect(() => {
    // Функция для фильтрации сотрудников по выбранной должности и поиску по имени, фамилии и отчеству
    const filterEmployees = () => {
      let filteredData = dataEmployee;

      // Фильтрация по должности
      // if (filter !== '') {
      //   filteredData = filteredData.filter((employee) => employee.position && employee.position.title === filter);
      // }


      // // Поиск по имени, фамилии и отчеству
      if (searchQuery !== '') {
        filteredData = filteredData.filter((employee) => {
          const fullName = `${employee.lastName} ${employee.firstName} ${employee.middleName}`;
          return fullName.toLowerCase().includes(searchQuery.toLowerCase());
        });
      }
      setFilteredEmployees(filteredData);
    };

    filterEmployees();
  }, [dataEmployee, searchQuery]);

 console.log( typeof filteredEmployees);
  return (
    <>
      <div className={'container_navigate'}>

        <div className={'search'}>
          <input
            type="text"
            name="search"
            placeholder="Поиск.."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} />
        </div>

        <div className={'filter'}>

        </div>

        <div className={'btn_add_users'}>
          <Link to="/employees/createEmployee">
            <button className={'add_user'}>Добавить</button>
          </Link>
        </div>

      </div>

      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Фамилия</th>
            <th>Имя</th>
            <th>Отчество</th>
            <th>Табельный номер</th>
            <th>Должность</th>
            <th>Подразделение</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{employee.lastName}</td>
              <td>{employee.firstName}</td>
              <td>{employee.middleName}</td>
              <td>{employee.personnelNumber}</td>
              <td>{employee.position ? employee.position.title : "Нет данных"}</td>
              <td>{employee.divisions ? employee.divisions.title : "Нет данных"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
export default EmployeesPage


{/* <button onClick={() => setPopupIsOpen(true)}>
          Создать сотрудника
        </button> */}
{/* 
        <Popup isOpen={popupIsOpen} onClose={() => setPopupIsOpen(false)}>
          <h2>Создание сотрудника</h2>
          <form onSubmit={handleSubmitPosition}>
            <label htmlFor="lastName">Фамилия</label>
            <div>
              <input
                type="text"
                placeholder="Иванов"
                className={'form_control'}
                onChange={(e: any) => setLastName(e.target.value)}
                value={lastName}
                required
              />
            </div>

            <label htmlFor="firstName">Имя</label>
            <div>
              <input
                type="text"
                placeholder="Иван"
                className={'form_control'}
                onChange={(e: any) => setFirstName(e.target.value)}
                value={firstName}
                required
              />
            </div>

            <label htmlFor="middleName">Отчество</label>
            <div>
              <input
                type="text"
                placeholder="Иванович"
                className={'form_control'}
                onChange={(e: any) => setMiddleName(e.target.value)}
                value={middleName}
                required
              />
            </div>
            <label htmlFor="status">Статус</label>

            <div>
              <input
                type="radio"
                name="status"
                onChange={(e) => setIsActive(e.target.value === 'false')}
                value={isActive.toString()}
                required
              />
              <label htmlFor="isActive">Активный</label>
            </div>
            <div>
              <input
                type="radio"
                name="status"
                required
                onChange={(e) => setIsActive(e.target.value === 'true')}
                value={isActive.toString()}
              />
              <label htmlFor="isActive">Неактивный</label>
            </div>


            <div className={'action_buttons'}>
              <button className={'btn_add_cancel'}>Отменить</button>
              <button className={'btn_add_cancel'}>Добавить</button>
            </div>

          </form>
        </Popup> */}
