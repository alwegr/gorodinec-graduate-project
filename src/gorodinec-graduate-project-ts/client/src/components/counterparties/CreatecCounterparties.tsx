import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../style/Global_style.css"

const URL = process.env.REACT_APP_URL;

function CreatecCounterparties({ isOpen, onClose }: any) {
  const [nameCounterparties, setNameCounterparties] = useState("");
  const [inn, setInn] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [legalAddress, setLegalAddress] = useState("");
  const [mailingAddress, setMailingAddress] = useState("");
  const [bic, setBic] = useState("");
  const [numberBic, setNumberBic] = useState("");

  const handleSubmitPosition = async (event: any) => {
    event.preventDefault();
    axios
      .post(`${URL}/create/counterparties`, {
        nameCounterparties,
        inn,
        telephone,
        email,
        legalAddress,
        mailingAddress,
        bic,
        numberBic,
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
        onClose();
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {isOpen && (
        <div className={"page_popup"}>
          <div className={"wrapper"}>
            <form onSubmit={handleSubmitPosition}>
              <h2>Создание контрагентов</h2>
              <div>
                <label htmlFor="name">Наименование</label>
                <div>
                  <input
                    type="text"
                    id="name"
                    placeholder="Наименование"
                    required
                    onChange={(e: any) => setNameCounterparties(e.target.value)}
                    value={nameCounterparties}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="inn">ИНН</label>
                <div>
                  <input
                    type="text"
                    maxLength={15}
                    id="inn"
                    placeholder="ИНН"
                    required
                    onChange={(e: any) => setInn(e.target.value)}
                    value={inn}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="telephon">Телефон</label>
                <div>
                  <input
                    type="tel"
                    id="telephon"
                    placeholder="Телефон"
                    maxLength={13}
                    required
                    onChange={(e: any) => setTelephone(e.target.value)}
                    value={telephone}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email">Электронная почта</label>
                <div>
                  <input
                    type="email"
                    id="email"
                    placeholder="Электронная почта"
                    required
                    onChange={(e: any) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="legalAddress">Юридичесикй адрес</label>
                <div>
                  <input
                    type="text"
                    id="legalAddress"
                    placeholder="Юридичесикй адрес"
                    required
                    onChange={(e: any) => setLegalAddress(e.target.value)}
                    value={legalAddress}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="mailingAddress">Почтовый адрес</label>
                <div>
                  <input
                    type="text"
                    id="mailingAddress"
                    placeholder="Электронная почта"
                    required
                    onChange={(e: any) => setMailingAddress(e.target.value)}
                    value={mailingAddress}
                  />
                </div>
              </div>
              <hr className={"dividing_line"} />
              <h3>Счет</h3>
              <div>
                <label htmlFor="bic">БИК</label>
                <div>
                  <input
                    type="text"
                    id="bic"
                    placeholder="БИК"
                    required
                    onChange={(e: any) => setBic(e.target.value)}
                    value={bic}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="numberBic">Номер</label>
                <div>
                  <input
                    type="text"
                    id="numberBic"
                    placeholder="Номер"
                    required
                    onChange={(e: any) => setNumberBic(e.target.value)}
                    value={numberBic}
                  />
                </div>
              </div>
              <div className={"form_buttons"}>
                <Link to={"/counterparties"}>
                  <button className={"form_btn cancel"} onClick={onClose}>
                    Отменить
                  </button>
                </Link>
                <button className={"form_btn add"}>Добавить</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
export default CreatecCounterparties;
