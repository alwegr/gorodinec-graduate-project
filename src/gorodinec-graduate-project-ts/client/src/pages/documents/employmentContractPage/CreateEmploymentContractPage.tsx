import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import TabCreateDocuments from "../../../components/tabCeateDocuments/TabCreateDocuments";
import Select from "react-select";
import { style } from "../../../components/ui/select";
import "../../../style/Global_style.css";
import Sidebar from "../../../components/sidebar/Sidebar";
import { sidebarItems } from "../../../components/sidebar/DataSidebar";

const URL = process.env.REACT_APP_URL;

function CreateEmploymentContract() {
  const [dateEmploymentContract, setDateEmploymentContract] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [address, setAddress] = useState("");
  const [position, setPosition] = useState("");
  const [dataPosition, setDataPosition] = useState<any[]>([]);
  const [seriesPassport, setSeriesPassport] = useState("");
  const [numberPassport, setNumberPassport] = useState("");
  const [issued, setIssued] = useState("");
  const [dateOfIssue, setDateOfIssue] = useState("");
  const [departmentCode, setDepartmentCode] = useState("");
  const [salary, setSalary] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${URL}/get/position`)
      .then((res) => {
        setDataPosition(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmitEmploymentContract = async (event: any) => {
    event.preventDefault();
    axios
      .post(`${URL}/create/employmentContract`, {
        dateEmploymentContract,
        lastName,
        firstName,
        middleName,
        address,
        position,
        seriesPassport,
        numberPassport,
        issued,
        dateOfIssue,
        departmentCode,
        salary,
      })
      .then((res) => {
        console.log(res);
        navigate("/documents");
      })
      .catch((error) => console.log(error));
  };

  const handlePositionChange = (selectedOption: any) => {
    if (selectedOption) {
      setPosition(selectedOption.value);
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
            <p>/ Создать трудовой договор</p>
          </div>
        </div>
        <section>
          <TabCreateDocuments />
          <div>
            <div>
              <form
                className={"container_colum"}
                onSubmit={handleSubmitEmploymentContract}
              >
                <div className={"container_colum_item"}>
                  <h3>Личные данные</h3>
                  <div className={"personal_information"}>
                    <label htmlFor="lastName">Фамилия</label>
                    <div>
                      <input
                        type="text"
                        id="lastName"
                        placeholder="Иванов"
                        onChange={(e: any) => setLastName(e.target.value)}
                        value={lastName}
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
                        onChange={(e: any) => setFirstName(e.target.value)}
                        value={firstName}
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
                        onChange={(e: any) => setMiddleName(e.target.value)}
                        value={middleName}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="address">Адрес</label>
                    <div>
                      <input
                        type="text"
                        id="address"
                        placeholder="Адрес"
                        onChange={(e: any) => setAddress(e.target.value)}
                        value={address}
                        required
                      />
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
                  <div className="probel"></div>
                </div>

                <div className={"container_colum_item"}>
                  <h3>Персональные данные</h3>
                  <div className="seria_number_passport">
                    <div className={"personal_information"}>
                      <label htmlFor="">Серия </label>
                      <div>
                        <input
                          type="text"
                          maxLength={5}
                          id=""
                          placeholder="Серия  паспорта"
                          onChange={(e: any) =>
                            setSeriesPassport(e.target.value)
                          }
                          value={seriesPassport}
                          required
                        />
                      </div>
                    </div>
                    <div className={"personal_information"}>
                      <label htmlFor="">Номер</label>
                      <div>
                        <input
                          type="text"
                          maxLength={6}
                          id=""
                          placeholder="Номер паспорта"
                          onChange={(e: any) =>
                            setNumberPassport(e.target.value)
                          }
                          value={numberPassport}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className={"personal_information"}>
                    <label htmlFor="">Кем выдан</label>
                    <div>
                      <input
                        type="text"
                        id=""
                        placeholder="Кем выдан паспорт"
                        onChange={(e: any) => setIssued(e.target.value)}
                        value={issued}
                        required
                      />
                    </div>
                  </div>
                  <div className={"personal_information"}>
                    <label htmlFor="">Дата выдачи</label>
                    <div>
                      <input
                        type="date"
                        id=""
                        placeholder="Дата выдачи паспорта"
                        onChange={(e: any) => setDateOfIssue(e.target.value)}
                        value={dateOfIssue}
                        required
                      />
                    </div>
                  </div>
                  <div className={"personal_information"}>
                    <label htmlFor="">Код подразделения</label>
                    <div>
                      <input
                        type="text"
                        id=""
                        maxLength={7}
                        placeholder="Код подразделения"
                        onChange={(e: any) => setDepartmentCode(e.target.value)}
                        value={departmentCode}
                        required
                      />
                    </div>
                  </div>
                  <div className={"personal_information"}>
                    <label htmlFor="">Оклад</label>
                    <div>
                      <input
                        type="text"
                        id=""
                        placeholder="Оклад"
                        onChange={(e: any) => setSalary(e.target.value)}
                        value={salary}
                        required
                      />
                    </div>
                  </div>
                  <div className={"form_buttons"}>
                    <Link to={"/documents"}>
                      <button className={"form_btn cancel"}>Отменить</button>
                    </Link>
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
export default CreateEmploymentContract;
