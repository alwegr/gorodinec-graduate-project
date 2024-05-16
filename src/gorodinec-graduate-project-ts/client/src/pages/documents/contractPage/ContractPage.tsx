import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import TabCreateDocuments from "../../../components/tabDocuments/TabCreateDocuments";
import Select from "react-select";
import { style } from "../../../components/ui/select";
import "../../../style/Global_style.css";
import "./Contract_style.css";

const URL = process.env.REACT_APP_URL;

function Contract() {
  const [currency, setCurrency] = useState("");
  const [dataCurrency, setDataCurrency] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(`${URL}/get/currency`)
      .then((res) => {
        setDataCurrency(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // валюта
  const handleCurrencyChange = (selectedOption: any) => {
    if (selectedOption) {
      setCurrency(selectedOption.value);
    }
  };
  return (
    <>
      <div className={"header_documents"}>
        <div className={"header_content"}>
          <IoIosArrowBack className={"arrow_documents"} />
          <Link to={"/documents"} className={"header_link"}>
            Документы
          </Link>
          <p>/ Договор</p>
        </div>
      </div>
      <section>
        <TabCreateDocuments />
        <div>
          <div>
            <form className={"container_colum"}>
              <div className={"container_colum_item"}>
                <div>
                  <label htmlFor="">Предмет договора</label>
                  <div>
                    <input id="" type="text" />
                  </div>
                </div>
                <div>
                  <label htmlFor="start">Дата начала</label>
                  <div>
                    <input
                      type="date"
                      id="start"
                      name="trip-start"
                      min="2024-01-01"
                      max="2074-12-31"
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
                    <input id="price" type="text" />
                  </div>
                </div>
                <div>
                  <label htmlFor="currency">Статус</label>
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
                      placeholder={"Статус"}
                    />
                  </div>
                </div>
              </div>

              <div className={"container_colum_item"}>
                <h3>Контрагенты</h3>
                <div>
                  <label htmlFor="">Наименование</label>
                  <div>
                    <input id="" type="text" />
                  </div>
                </div>
                <div>
                  <label htmlFor="">ИНН</label>
                  <div>
                    <input id="" type="text" />
                  </div>
                </div>
                <div>
                  <label htmlFor="">Телефон</label>
                  <div>
                    <input id="" type="text" />
                  </div>
                </div>
                <div>
                  <label htmlFor="">Электронная почта</label>
                  <div>
                    <input id="" type="text" />
                  </div>
                </div>
                <div>
                  <label htmlFor="">Юридический адрес</label>
                  <div>
                    <input id="" type="text" />
                  </div>
                </div>
                <div>
                  <label htmlFor="">Почтовый адрес</label>
                  <div>
                    <input id="" type="text" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contract;
