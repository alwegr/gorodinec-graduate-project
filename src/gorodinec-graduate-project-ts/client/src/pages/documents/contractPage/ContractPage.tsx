import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../../../components/sidebar/Sidebar";
import { sidebarItems } from "../../../components/sidebar/DataSidebar";
import { Contract, Counterpartie } from "../DocumentInterface";
import { IoIosArrowBack } from "react-icons/io";
import TabDocumentsPage from "../../../components/tabDocumentsPage/TabDocumentsPage";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import ContractUpdate from "../../../components/document/contract/ContractUpdate";

const URL = process.env.REACT_APP_URL;

function ContractPage() {
  const [dataContract, setDataContract] = useState<Contract[]>([]);
  const [counterpartie, setCounterpartie] = useState<Contract[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filtereContract, setFilteredContract] = useState<Contract[]>([]);
  const [openPopoverId, setOpenPopoverId] = useState<string | null>(null);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState<boolean>(false);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<string>("");

  useEffect(() => {
    axios
      .get(`${URL}/get/contract`)
      .then((res) => {
        setDataContract(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const filterDocument = () => {
      let filteredData = dataContract;

      // Поиск создателю
      if (searchQuery !== "") {
        filteredData = filteredData.filter((contract) => {
          const fullName = `${contract.counterparties.nameCounterparties}`;
          return fullName.toLowerCase().includes(searchQuery.toLowerCase());
        });
      }
      setFilteredContract(filteredData);
    };

    filterDocument();
  }, [dataContract, searchQuery]);

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
        <div className={"header_documents"}>
          <div className={"header_content"}>
            <IoIosArrowBack className={"arrow_documents"} />
            <p>Документы</p>
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
            </div>
            <div className={"btn_add_document"}>
              <Link to="/documents/createDocument/contract">
                <button className={"add_document"}>Добавить</button>
              </Link>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>№</th>
                <th>Наименование</th>
                <th>Контрагент</th>
                <th>Дата начала</th>
                <th>Дата окончания</th>
                <th>Ответсвенный</th>
                <th>Статус</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtereContract.map((contract, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <Link
                    to={`/documents/createDocument/contract/pdf/${contract._id}`}
                    className={"link_table"}
                  >
                    {" "}
                    <td>{contract.nameContract}</td>
                  </Link>
                  <td>
                    {contract.counterparties
                      ? contract.counterparties.nameCounterparties
                      : "нет данных"}
                  </td>
                  <td>{new Date(contract.dateStart).toLocaleDateString()}</td>
                  <td>{new Date(contract.dateEnd).toLocaleDateString()}</td>
                  <td>
                    {contract.createContract.lastName}⠀
                    {contract.createContract.firstName.charAt(0)}.
                    {contract.createContract.middleName.charAt(0)}.
                  </td>
                  <td>{contract.statusContract.title}</td>
                  <td>
                    <HiEllipsisHorizontal
                      className="HiEllipsisHorizontal"
                      onClick={() => togglePopover(contract._id)}
                    />
                    {openPopoverId === contract._id && (
                      <div className="popup">
                        <div className="popup_content">
                          <div
                            className="button_edit"
                            onClick={() => handleUpdateEmployee(contract._id)}
                          >
                            <p>Изменить</p>
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
        <ContractUpdate
          isOpen={isModalUpdateOpen}
          onClose={handleCloseUpdateModal}
          contractId={selectedEmployeeId}
        />
      </Sidebar>
    </>
  );
}
export default ContractPage;
