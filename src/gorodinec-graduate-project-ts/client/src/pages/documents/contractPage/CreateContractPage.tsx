import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import TabCreateDocuments from "../../../components/tabCeateDocuments/TabCreateDocuments";
import Select from "react-select";
import { style } from "../../../components/ui/select";
import "../../../style/Global_style.css";
import "./Contract_style.css";
import Sidebar from "../../../components/sidebar/Sidebar";
import { sidebarItems } from "../../../components/sidebar/DataSidebar";

const URL = process.env.REACT_APP_URL;

function Contract() {
  const [dateEnd, setDateEnd] = useState("");
  const [currency, setCurrency] = useState("");
  const [dataCurrency, setDataCurrency] = useState<any[]>([]);
  const [price, setPrice] = useState("");
  const [statusContract, setStatusContract] = useState("");
  const [dataStatusContract, setDataStatusContract] = useState<any[]>([]);
  const [subjectAgreement, setSubjectAgreement] = useState("");
  const [createContract, setCreateContract] = useState("");
  const [dataCreateContract, setDataCreateContract] = useState<any[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${URL}/get/currency`)
      .then((res) => {
        setDataCurrency(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${URL}/get/employees`)
      .then((res) => {
        setDataCreateContract(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get(`${URL}/get/statusContract`)
      .then((res) => {
        setDataStatusContract(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleContracte = async (event: any) => {
    event.preventDefault();
    axios
      .post(`${URL}/create/contract`, {
        dateEnd,
        currency,
        price,
        statusContract,
        subjectAgreement,
        createContract,
      })
      .then((res) => {
        console.log(res);
        navigate("/documents/contract");
      })
      .catch((error) => console.log(error));
  };

  // валюта
  const handleCurrencyChange = (selectedOption: any) => {
    if (selectedOption) {
      setCurrency(selectedOption.value);
    }
  };
  // статус
  const handleStatusContractChange = (selectedOption: any) => {
    if (selectedOption) {
      setStatusContract(selectedOption.value);
    }
  };
  // создатель
  const handleCreateContractChange = (selectedOption: any) => {
    if (selectedOption) {
      setCreateContract(selectedOption.value);
    }
  };
  return (
    <>
      <Sidebar items={sidebarItems}>
        <div className={"header_documents"}>
          <div className={"header_content"}>
            <IoIosArrowBack className={"arrow_documents"} />
            <Link to={"/documents"} className={"header_link"}>
              Документы
            </Link>
            <p>/ Создать договор</p>
          </div>
        </div>
        <section>
          <TabCreateDocuments />
          <div>
            <div>
              <form className={"container_colum"} onSubmit={handleContracte}>
                <div className={"container_colum_item"}>
                  <div>
                    <label htmlFor="currency">Создатель</label>
                    <div className="select_position">
                      <Select
                        options={dataCreateContract.map((createContract) => ({
                          value: createContract._id,
                          label: `${createContract.lastName} ${createContract.firstName} ${createContract.middleName}`,
                        }))}
                        onChange={handleCreateContractChange}
                        styles={style}
                        isClearable
                        isSearchable
                        required
                        placeholder={"Создатель"}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="">Предмет договора</label>
                    <div>
                      <input
                        id=""
                        type="text"
                        onChange={(e: any) =>
                          setSubjectAgreement(e.target.value)
                        }
                        value={subjectAgreement}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="end">Дата окончания</label>
                    <div>
                      <input
                        type="date"
                        id="end"
                        name="trip-end"
                        min="2024-01-01"
                        max="2074-12-31"
                        onChange={(e: any) => setDateEnd(e.target.value)}
                        value={dateEnd}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="currency">Валюта</label>
                    <div className="select_position">
                      <Select
                        options={dataCurrency.map((currency) => ({
                          value: currency._id,
                          label: currency.title,
                        }))}
                        onChange={handleCurrencyChange}
                        styles={style}
                        isClearable
                        isSearchable
                        required
                        placeholder={"Валюта"}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="price">Стоимость</label>
                    <div>
                      <input
                        id="price"
                        type="text"
                        onChange={(e: any) => setPrice(e.target.value)}
                        value={price}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="currency">Статус</label>
                    <div className="select_position">
                      <Select
                        options={dataStatusContract.map((statusContract) => ({
                          value: statusContract._id,
                          label: statusContract.title,
                        }))}
                        onChange={handleStatusContractChange}
                        styles={style}
                        isClearable
                        isSearchable
                        required
                        placeholder={"Статус"}
                      />
                    </div>
                  </div>
                  <div>
                    <button className={"form_btn add"}>Добавить</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Sidebar>
    </>
  );
}
export default Contract;
