import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Sidebar from "../../components/sidebar/Sidebar";
import { sidebarItems } from "../../components/sidebar/DataSidebar";
import CreatecCounterparties from "../../components/counterparties/CreatecCounterparties";

function Counterparties() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
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
          <div className={"btn_add_users"} onClick={handleAddCounterparties}>
            <button className={"add_user"}>Добавить</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>№</th>
                <th>Наименование</th>
                <th>Телефон</th>
                <th>Эл. почта</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
              </tr>
            </tbody>
          </table>
        </section>
        <CreatecCounterparties isOpen={isModalOpen} onClose={handleCloseModal}/>
      </Sidebar>
    </>
  );
}
export default Counterparties;
