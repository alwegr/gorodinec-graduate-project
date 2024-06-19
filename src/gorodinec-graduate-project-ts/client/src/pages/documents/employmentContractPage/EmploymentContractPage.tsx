import React, { useEffect, useState } from "react";
import axios from "axios";
import { EmploymentContract } from "../DocumentInterface";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import TabDocumentsPage from "../../../components/tabDocumentsPage/TabDocumentsPage";
import Sidebar from "../../../components/sidebar/Sidebar";
import { sidebarItems } from "../../../components/sidebar/DataSidebar";
import "../../../style/Global_style.css"

const URL = process.env.REACT_APP_URL;

function EmploymentContractPage() {
  const [dataEmploymentContract, setEmploymentContract] = useState<
    EmploymentContract[]
  >([]);
  const [openPopoverId, setOpenPopoverId] = useState<string | null>(null);
  const [filtereEmploymentContract, setFilteredEmploymentContract] = useState<
    EmploymentContract[]
  >([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    axios
      .get(`${URL}/get/employmentContract`)
      .then((res) => {
        setEmploymentContract(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const filterDocument = () => {
      let filteredData = dataEmploymentContract;

      // Фильтрация виду документа
      if (filter !== "") {
        filteredData = filteredData.filter(
          (employmentContract) =>
            employmentContract.position &&
            employmentContract.position.title === filter
        );
      }

      // Поиск создателю
      if (searchQuery !== "") {
        filteredData = filteredData.filter((employmentContract) => {
          const fullName = `${employmentContract.lastName} ${employmentContract.firstName} ${employmentContract.middleName}`;
          return fullName.toLowerCase().includes(searchQuery.toLowerCase());
        });
      }
      setFilteredEmploymentContract(filteredData);
    };

    filterDocument();
  }, [dataEmploymentContract, filter, searchQuery]);

  const handleDelete = (id: string) => {
    if (window.confirm(`Вы действительно хотите удалить?`)) {
      axios
        .delete(`${URL}/delete/employmentContract/${id}`)
        .then((res) => {
          console.log(res);
          // Обновляем данные после удаления сотрудника
          setEmploymentContract(
            dataEmploymentContract.filter(
              (employmentContract) => employmentContract._id !== id
            )
          );
        })
        .catch((err) => console.log(err));
    }
  };

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

  return (
    <>
      <Sidebar items={sidebarItems}>
        <div className={"header_documents"}>
          <div className={"header_content  header_link"}>
            <IoIosArrowBack className={"arrow_documents"} />
            Документы
          </div>
        </div>
        <section>
          <TabDocumentsPage />
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

            <div className={"btn_add_document"}>
              <Link to="/documents/createDocument/employmentContract">
                <button className={"add_user"}>Добавить</button>
              </Link>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>№</th>
                <th>Наименование</th>
                <th>Дата</th>
                <th>ФИО</th>
                <th>Должность</th>
                <th>Подразделение</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtereEmploymentContract.map((employmentContract, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{employmentContract.nameEmploymentContract}</td>
                  <td>
                    {new Date(
                      employmentContract.dateEmploymentContract
                    ).toLocaleDateString()}
                  </td>
                  <td>
                    {employmentContract.lastName} {employmentContract.firstName}{" "}
                    {employmentContract.middleName}
                  </td>

                  <td>
                    <HiEllipsisHorizontal
                      className="HiEllipsisHorizontal"
                      onClick={() => togglePopover(employmentContract._id)}
                    />
                    {openPopoverId === employmentContract._id && (
                      <div className="popup">
                        <div className="popup_content">
                          <div
                            onClick={() => handleDelete(employmentContract._id)}
                            className="button_delete"
                          >
                            <p>Удалить</p>
                          </div>
                          <div className="button_details">
                            <Link
                              to={`/documents/createDocument/employmentContract/pdf/${employmentContract._id}`}
                            >
                              <p>Подробнее</p>
                            </Link>
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
      </Sidebar>
    </>
  );
}

export default EmploymentContractPage;
