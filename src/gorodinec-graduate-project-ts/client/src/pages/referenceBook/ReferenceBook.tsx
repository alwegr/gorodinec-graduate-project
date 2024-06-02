import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoIosArrowBack } from "react-icons/io";
import Sidebar from "../../components/sidebar/Sidebar";
import { sidebarItems } from "../../components/sidebar/DataSidebar";
import { Currency } from "../documents/DocumentInterface";
import "./ReferenceBook.css";

const URL = process.env.REACT_APP_URL;

function ReferenceBook() {
  const [dataCurrency, setDataCurrency] = useState<Currency[]>([]);

  useEffect(() => {
    axios
      .get(`${URL}/get/currency`)
      .then((res) => {
        setDataCurrency(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Sidebar items={sidebarItems}>
        <div className={"header_documents"}>
          <div className={"header_content"}>
            <IoIosArrowBack className={"arrow_documents  header_link"} />
            <p>Справочник</p>
          </div>
        </div>
        <section>
          <h2>Валюта</h2>
          <table className="table_currency">
            <thead>
              <tr>
                <th>№</th>
                <th>Название</th>
                <th>Буквунный код</th>
                <th>Цифровой код</th>
              </tr>
            </thead>
            <tbody>
              {dataCurrency.map((currency, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{currency.title}</td>
                  <td>{currency.letterCode}</td>
                  <td>{currency.digitalCode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </Sidebar>
    </>
  );
}
export default ReferenceBook;
