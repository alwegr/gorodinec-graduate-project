import React, { useEffect, useState } from "react";
import { Document } from "../DocumentInterface"
import { IoIosArrowBack } from "react-icons/io";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Document_style.css";
import "../../../style/Global_style.css";

const URL = process.env.REACT_APP_URL;

function DocumentsPage() {
  const [dataDocument, setDataDocument] = useState<Document[]>([]);
  const [openPopoverId, setOpenPopoverId] = useState<string | null>(null);
  const [filteredDocument, setFilteredDocumet] = useState<Document[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    axios
      .get(`${URL}/get/documents`)
      .then((res) => {
        setDataDocument(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

    // удаление
    const handleDelete = (id: string) => {
      if (window.confirm(`Вы действительно хотите удалить?`)){
        axios
        .delete(`${URL}/delete/employees/${id}`)
        .then((res) => {
          console.log(res);
          // Обновляем данные после удаления сотрудника
          setDataDocument(dataDocument.filter((document) => document._id !== id));
        })
        .catch((err) => console.log(err));
      }
    };

  useEffect(() => {
    const filterDocument = () => {
      let filteredData = dataDocument;

      // Фильтрация по имени документа
      if (filter !== "") {
        filteredData = filteredData.filter(
          (document) => document.name && document.name === filter
        );
      }

      // // Поиск по имени, фамилии и отчеству
      if (searchQuery !== "") {
        filteredData = filteredData.filter((document) => {
          const fullName = `${document.name}`;
          return fullName.toLowerCase().includes(searchQuery.toLowerCase());
        });
      }
      setFilteredDocumet(filteredData);
    };

    filterDocument();
  }, [dataDocument, filter, searchQuery]);

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
          <IoIosArrowBack className={"arrow_documents"}/>
          <p>Документы</p>
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
              <th>Дата</th>
              <th>Создатель</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredDocument.map((document, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{document.name}</td>
                <td>{document.date}</td>
                {/* <td>
                  {document.creator.lastName}
                  {document.creator.firstName.charAt(0)}
                  {document.creator.middleName.charAt(0)}
                </td> */}
                <td>
                  <HiEllipsisHorizontal
                    className="HiEllipsisHorizontal"
                    onClick={() => togglePopover(document._id)}
                  />
                  {openPopoverId === document._id && (
                    <div className="popup">
                      <div className="popup_content">
                        <div
                          onClick={() =>  handleDelete(document._id) }
                          className="button_delete">
                          <p>Удалить</p>
                        </div>
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
