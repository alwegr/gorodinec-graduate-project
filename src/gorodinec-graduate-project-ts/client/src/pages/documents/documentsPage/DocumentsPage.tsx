import React, { useEffect, useState } from "react";
import { ServiceNote } from "../DocumentInterface";
import { IoIosArrowBack } from "react-icons/io";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Document_style.css";
import "../../../style/Global_style.css";
import TabDocumentsPage from "../../../components/tabDocumentsPage/TabDocumentsPage";

const URL = process.env.REACT_APP_URL;

function DocumentsPage() {
  const [dataServiceNote, setDataServiceNote] = useState<ServiceNote[]>([]);
  const [openPopoverId, setOpenPopoverId] = useState<string | null>(null);
  const [filteredServiceNote, setFilteredServiceNote] = useState<ServiceNote[]>(
    []
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/get/serviceNote`)
      .then((res) => {
        setDataServiceNote(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // удаление
  const handleDelete = (id: string) => {
    if (window.confirm(`Вы действительно хотите удалить?`)) {
      axios
        .delete(`${URL}/delete/serviceNote/${id}`)
        .then((res) => {
          console.log(res);
          // Обновляем данные после удаления сотрудника
          setDataServiceNote(
            dataServiceNote.filter((serviceNote) => serviceNote._id !== id)
          );
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    const filterDocument = () => {
      let filteredData = dataServiceNote;

  // Фильтрация по имени документа
  // if (filter !== "") {
  //   filteredData = filteredData.filter(
  //     (serviceNote) => serviceNote.name && serviceNote.name === filter
  //   );
  // }

  // Поиск по имени, фамилии и отчеству
      if (searchQuery !== "") {
        filteredData = filteredData.filter((serviceNote) => {
          const fullName = `${serviceNote.creator.lastName} ${serviceNote.creator.firstName} ${serviceNote.creator.middleName}`;
          return fullName.toLowerCase().includes(searchQuery.toLowerCase());
        });
      }
      setFilteredServiceNote(filteredData);
    };

    filterDocument();
  }, [dataServiceNote, filter, searchQuery]);

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
      <div className={"header_documents"}>
        <div className={"header_content"}>
          <IoIosArrowBack className={"arrow_documents"} />
          <p>Документы</p>
        </div>
      </div>
      <section>
      <TabDocumentsPage/>
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
                <option value="Служебная записка">Служебная записка</option>
                <option value="Трудовой договор">Трудовой договор</option>
                <option value="Договор">Договор</option>
              </select>
            </div>
          </div>
          <div className={"btn_add_document"}>
            <Link to="/documents/createDocument/file">
              <button className={"add_document"}>Добавить</button>
            </Link>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Наименование</th>
              <th>Вид</th>
              <th>Создатель</th>
              <th>Адресат</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredServiceNote.map((serviceNote, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{serviceNote.nameServiceNote}</td>
                <td>{serviceNote.viewServiceNote.title}</td>
                <td>
                  {serviceNote.creator.lastName}
                  {serviceNote.creator.firstName.charAt(0)}.
                  {serviceNote.creator.middleName.charAt(0)}.
                  {/* {serviceNote.creator.map((creator) => {
                    return `${creator.lastName} ${creator.firstName.charAt(
                      0
                    )}. ${creator.middleName.charAt(0)}.`;
                  })} */}
                </td>
                <td>
                  {serviceNote.addresser.lastName}
                  {serviceNote.addresser.firstName.charAt(0)}
                  {serviceNote.addresser.middleName.charAt(0)}
                  {/* {serviceNote.addresser.map((addresser) => {
                    return `${addresser.lastName} ${addresser.firstName.charAt(
                      0
                    )}. ${addresser.middleName.charAt(0)}.`;
                  })} */}
                </td>
                <td>
                  <HiEllipsisHorizontal
                    className="HiEllipsisHorizontal"
                    onClick={() => togglePopover(serviceNote._id)}
                  />
                  {openPopoverId === serviceNote._id && (
                    <div className="popup">
                      <div className="popup_content">
                        <div
                          onClick={() => handleDelete(serviceNote._id)}
                          className="button_delete"
                        >
                          <p>Удалить</p>
                        </div>
                        <Link to={`/documents/createDocument/serviceNote/pdf/${serviceNote._id}`}>
                          <p>Подробнее</p>
                        </Link>
                        {/* <div className="button_edit"
                          onClick={() => handleUpdateEmployee(document._id)}>
                          <p>Редактировать</p>
                        </div> */}
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
export default DocumentsPage;
