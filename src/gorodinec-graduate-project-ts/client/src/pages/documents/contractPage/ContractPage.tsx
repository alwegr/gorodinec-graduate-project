import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../../../components/sidebar/Sidebar";
import { sidebarItems } from "../../../components/sidebar/DataSidebar";
import { Contract, Counterpartie } from "../DocumentInterface";
import { IoIosArrowBack } from "react-icons/io";
import TabDocumentsPage from "../../../components/tabDocumentsPage/TabDocumentsPage";

const URL = process.env.REACT_APP_URL;

function ContractPage() {
  const [dataContract, setDataContract] = useState<Contract[]>([]);
  const [counterpartie, setCounterpartie] = useState<Contract[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    fetchCounterpartie();
  }, []);

  const fetchCounterpartie = async () => {
    try {
      const response = await axios.get<Contract[]>(
        `${URL}/get/contract`
      );
      setDataContract(response.data);
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  useEffect(() => {
    axios
      .get(`${URL}/get/counterparties`)
      .then((res) => {
        setCounterpartie(res.data);
      })
      .catch((err) => console.log(err));
  }, []);



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
              <div className={"container_filter"}>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className={"filter"}
                >
                  <option value="">Все</option>
                  <option value="Докладная">Докладная</option>
                  <option value="Пояснительная">Пояснительная</option>
                  <option value="Объяснительная">Объяснительная</option>
                  <option value="Материальная">Маретиальная</option>
                </select>
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
              {dataContract.map((contract, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{contract.nameContract}</td>
                  <td>
                    <div className={"counterparties_container"}>
                      {contract.counterparties.length > 0 ? (
                        contract.counterparties
                          .slice(0, 3)
                          .map((counterparties: Counterpartie, index) => (
                            <div key={index} className={"counterparties"}>
                              <div className="counterparties_letter">
                                "{counterparties.nameCounterparties
                                  ? counterparties.nameCounterparties
                                  : ""}"
                              </div>
                            </div>
                          ))
                      ) : (
                        <span>Нет данных</span>
                      )}
                      {contract.counterparties.length > 3 && (
                        <span>
                          <div className="avatar">
                            <span>+{contract.counterparties.length - 3}</span>
                          </div>
                        </span>
                      )}
                    </div>
                  </td>
                  <td>{new Date(contract.dateStart).toLocaleDateString()}</td>
                  <td>{new Date(contract.dateEnd).toLocaleDateString()}</td>
                  <td>
                    {contract.createContract.lastName}⠀
                    {contract.createContract.firstName.charAt(0)}.
                    {contract.createContract.middleName.charAt(0)}.
                  </td>
                  <td>{contract.statusContract.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </Sidebar>
    </>
  );
}
export default ContractPage;
