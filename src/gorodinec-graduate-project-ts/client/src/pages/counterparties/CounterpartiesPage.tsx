import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoIosArrowBack } from "react-icons/io";
import Sidebar from "../../components/sidebar/Sidebar";
import { sidebarItems } from "../../components/sidebar/DataSidebar";
import { Counterpartie } from "../documents/DocumentInterface";
import CreatecCounterparties from "../../components/counterparties/CreatecCounterparties";

const URL = process.env.REACT_APP_URL;

function Counterparties() {
  const [dataCounterpartie, setDataCounterpartie] = useState<Counterpartie[]>(
    []
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredCounterpartie, setFilteredCounterpartie] = useState<
    Counterpartie[]
  >([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get(`${URL}/get/counterparties`)
      .then((res) => {
        setDataCounterpartie(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const filterEmployees = () => {
      let filteredData = dataCounterpartie;

      // // Поиск по имени, фамилии и отчеству
      if (searchQuery !== "") {
        filteredData = filteredData.filter((counterpartie) => {
          const fullName = `${counterpartie.nameCounterparties}`;
          return fullName.toLowerCase().includes(searchQuery.toLowerCase());
        });
      }
      setFilteredCounterpartie(filteredData);
    };

    filterEmployees();
  }, [dataCounterpartie, searchQuery]);

  const handleAddCounterparties = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Sidebar items={sidebarItems}>
        <div className={"header_documents"}>
          <div className={"header_content  header_link"}>
            <IoIosArrowBack className={"arrow_documents"} />
            Контрагенты
          </div>
        </div>
        <section>
          <div className={"container_navigate"}>
            <div className={"search"}>
              <input
                type="text"
                name="search"
                placeholder="Поиск.."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className={"btn_add_users"} onClick={handleAddCounterparties}>
            <button className={"add_user"}>Добавить</button>
          </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>№</th>
                <th>Наименование</th>
                <th>Телефон</th>
                <th>Эл. почта</th>
                <th>Юридический адрес</th>
                <th>Почтовый адрес</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredCounterpartie.map((counterpartie, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{counterpartie.nameCounterparties}</td>
                  <td>{counterpartie.telephone}</td>
                  <td>{counterpartie.email}</td>
                  <td>{counterpartie.legalAddress}</td>
                  <td>{counterpartie.mailingAddress}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <CreatecCounterparties
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </Sidebar>
    </>
  );
}
export default Counterparties;
