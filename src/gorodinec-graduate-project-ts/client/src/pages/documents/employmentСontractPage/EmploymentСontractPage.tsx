import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import TabCreateDocuments from "../../../components/tabDocuments/TabCreateDocuments";
import Select from "react-select";
import { style } from "../../../components/ui/select";
import "../../../style/Global_style.css";

const URL = process.env.REACT_APP_URL;

function EmploymentСontract() {
  const [position, setPosition] = useState("");
  const [dataPosition, setDataPosition] = useState<any[]>([]);
  const [divisions, setDivisions] = useState("");
  const [dataDivisions, setDataDivisions] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(`${URL}/get/position`)
      .then((res) => {
        setDataPosition(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${URL}/get/divisions`)
      .then((res) => {
        setDataDivisions(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handlePositionChange = (selectedOption: any) => {
    if (selectedOption) {
      setPosition(selectedOption.value);
    }
  };
  const handlesetDivisionsChange = (selectedOption: any) => {
    if (selectedOption) {
      setDivisions(selectedOption.value);
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
          <p>/ Трудовой договор</p>
        </div>
      </div>
      <section>
        <TabCreateDocuments />
        <div>
          <div>
            <form className={"container_colum"}>
              <div className={"container_colum_item"}>
                <div className={"personal_information"}>
                  <label htmlFor="lastName">Фамилия</label>
                  <div>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Иванов"
                      // onChange={(e: any) => setLastName(e.target.value)}
                      // value={lastName}
                      required
                    />
                  </div>
                </div>
                <div className={"personal_information"}>
                  <label htmlFor="firstName">Имя</label>
                  <div>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="Иван"
                      // onChange={(e: any) => setLastName(e.target.value)}
                      // value={lastName}
                      required
                    />
                  </div>
                </div>
                <div className={"personal_information"}>
                  <label htmlFor="middleName">Отчество</label>
                  <div>
                    <input
                      type="text"
                      id="middleName"
                      placeholder="Иванович"
                      // onChange={(e: any) => setLastName(e.target.value)}
                      // value={lastName}
                      required
                    />
                  </div>
                </div>
                <div className={"personal_information"}>
                  <label htmlFor="gender">Пол</label>
                  <div className={"gender_radio"}>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Женский"
                        // checked={gender == "Женский" ? true : false}
                        // onChange={(e: any) => setGender(e.target.value)}
                      />
                      Женский
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Мужской"
                        // checked={gender == "Мужской" ? true : false}
                        // onChange={(e: any) => setGender(e.target.value)}
                      />
                      Мужской
                    </label>
                  </div>
                </div>
                <div className={"input_div"}>
                  <label htmlFor="position">Должность</label>
                  <div className="select_position">
                    <Select
                      options={dataPosition.map((position) => ({
                        value: position._id,
                        label: position.title,
                      }))}
                      onChange={handlePositionChange}
                      styles={style}
                      isClearable
                      isSearchable
                      required
                      placeholder={"Выберите должность"}
                    />
                  </div>
                </div>
                <div className={"input_div"}>
                  <label htmlFor="divisions">Подразделение</label>
                  <div className="select_divisions">
                    <Select
                      options={dataDivisions.map((divisions) => ({
                        value: divisions._id,
                        label: divisions.title,
                      }))}
                      onChange={handlesetDivisionsChange}
                      styles={style}
                      isClearable
                      isSearchable
                      required
                      placeholder={"Выберите подразделение"}
                    />
                  </div>
                </div>
              </div>

              <div className={"container_colum_item"}>
                <h3>Персональные данные</h3>
                <div className={"personal_information"}>
                  <label htmlFor="lastName">Серия и номер</label>
                  <div>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Серия и номер паспорта"
                      // onChange={(e: any) => setLastName(e.target.value)}
                      // value={lastName}
                      required
                    />
                  </div>
                </div>
                <div className={"personal_information"}>
                  <label htmlFor="lastName">Кем выдан</label>
                  <div>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Кем выдан паспорт"
                      // onChange={(e: any) => setLastName(e.target.value)}
                      // value={lastName}
                      required
                    />
                  </div>
                </div>
                <div className={"personal_information"}>
                  <label htmlFor="lastName">Дата выдачи</label>
                  <div>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Дата выдачи паспорта"
                      // onChange={(e: any) => setLastName(e.target.value)}
                      // value={lastName}
                      required
                    />
                  </div>
                </div>
                <div className={"personal_information"}>
                  <label htmlFor="lastName">Код подразделения</label>
                  <div>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Код подразделения"
                      // onChange={(e: any) => setLastName(e.target.value)}
                      // value={lastName}
                      required
                    />
                  </div>
                </div>
                <div className={"personal_information"}>
                  <label htmlFor="lastName">Оклад</label>
                  <div>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Оклад"
                      // onChange={(e: any) => setLastName(e.target.value)}
                      // value={lastName}
                      required
                    />
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
export default EmploymentСontract;
