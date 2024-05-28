import React, { useEffect, useState } from "react";
import { Employee } from "./EmployeeIterface";
import axios from "axios";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import { IoIosArrowBack } from "react-icons/io";
import CreateEmployees from "../../components/employees/createEmployees/CreateEmployees";
import UpdateEmployees from "../../components/employees/updateEmployees/UpdateEmployeesPage";
import "../../style/Global_style.css";
import "./Employees_style.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { sidebarItems } from "../../components/sidebar/DataSidebar";

const URL = process.env.REACT_APP_URL;

function Employees() {
  const [dataEmployee, setDataEmployee] = useState<Employee[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filter, setFilter] = useState<string>("");
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
  const [openPopoverId, setOpenPopoverId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState<boolean>(false);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<string>(""); // Добавляем состояние для модального окна

  useEffect(() => {
    axios
      .get(`${URL}/get/employees`)
      .then((res) => {
        setDataEmployee(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // удаление
  const handleDelete = (id: string) => {
    if (window.confirm(`Вы действительно хотите удалить?`)) {
      axios
        .delete(`${URL}/delete/employees/${id}`)
        .then((res) => {
          console.log(res);
          // Обновляем данные после удаления сотрудника
          setDataEmployee(
            dataEmployee.filter((employee) => employee._id !== id)
          );
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    const filterEmployees = () => {
      let filteredData = dataEmployee;

      // Фильтрация по должности
      if (filter !== "") {
        filteredData = filteredData.filter(
          (employee) => employee.position && employee.position.title === filter
        );
      }

      // // Поиск по имени, фамилии и отчеству
      if (searchQuery !== "") {
        filteredData = filteredData.filter((employee) => {
          const fullName = `${employee.lastName} ${employee.firstName} ${employee.middleName}`;
          return fullName.toLowerCase().includes(searchQuery.toLowerCase());
        });
      }
      setFilteredEmployees(filteredData);
    };

    filterEmployees();
  }, [dataEmployee, filter, searchQuery]);

  // модальное окно для таблицы
  const togglePopover = (id: string) => {
    setOpenPopoverId(openPopoverId === id ? null : id);
  };

  // функция для закрытие togglePopover вне элемента
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (!event.target.closest(".HiEllipsisHorizontal"))
        setOpenPopoverId(null);
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // модальное окно добавить сотрудника
  const handleAddEmployee = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // модальное окно редактировать сотрудника
  const handleUpdateEmployee = (id: string) => {
    setSelectedEmployeeId(id);
    setIsModalUpdateOpen(true);
  };

  const handleCloseUpdateModal = () => {
    setIsModalUpdateOpen(false);
  };

  return (
    <>
      <Sidebar items={sidebarItems}>
        <div className={"header_employees"}>
          <div className={"header_content"}>
            <IoIosArrowBack className={"arrow_employees"} />
            <p>Сотрудники</p>
          </div>
        </div>
        <section>
          <div className={"container_navigate"}>
            <div className={"container_search_filter"}>
              <div className={"search"}>
                <input
                  type="text"
                  name="search"
                  placeholder="Поиск.."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className={"container_filter"}>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className={"filter"}
                >
                  <option value="">Все</option>
                  <option value="Программист">Программист</option>
                  <option value="Дизайнер">Дизайнер</option>
                </select>
              </div>
            </div>

            <div className={"btn_add_users"} onClick={handleAddEmployee}>
              <button className={"add_user"}>Добавить</button>
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
                <th>Статус</th>
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
                  <td>
                    {employee.position ? employee.position.title : "Нет данных"}
                  </td>
                  <td>
                    {employee.divisions
                      ? employee.divisions.title
                      : "Нет данных"}
                  </td>
                  <td>
                    {employee.employeeStatus
                      ? employee.employeeStatus.title
                      : "Нет данных"}
                  </td>
                  <td>
                    <HiEllipsisHorizontal
                      className="HiEllipsisHorizontal"
                      onClick={() => togglePopover(employee._id)}
                    />
                    {openPopoverId === employee._id && (
                      <div className="popup">
                        <div className="popup_content">
                          <div
                            onClick={() => handleDelete(employee._id)}
                            className="button_delete"
                          >
                            <p>Удалить</p>
                          </div>
                          <div
                            className="button_edit"
                            onClick={() => handleUpdateEmployee(employee._id)}
                          >
                            <p>Редактировать</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        {/* Добавляем модальное окно */}
        <CreateEmployees isOpen={isModalOpen} onClose={handleCloseModal} />
        <UpdateEmployees
          isOpen={isModalUpdateOpen}
          onClose={handleCloseUpdateModal}
          employeeId={selectedEmployeeId}
        />
      </Sidebar>
    </>
  );
}
export default Employees;
