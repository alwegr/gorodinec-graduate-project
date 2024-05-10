import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { style } from "../../ui/select";
import "./CreateEmployees_style.css";
const URL = process.env.REACT_APP_URL;

function CreateEmployees({ isOpen, onClose }: any) {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [gender, setGender] = useState("");
  const [personnelNumber, setPersonnelNumber] = useState("");
  const [position, setPosition] = useState("");
  const [dataPosition, setDataPosition] = useState<any[]>([]);
  const [divisions, setDivisions] = useState("");
  const [dataDivisions, setDataDivisions] = useState<any[]>([]);
  const [employeeStatus, setEmployeeStatus] = useState("");
  const [dataEmployeeStatus, setDataEmployeeStatus] = useState<any[]>([]);
  // const [openPopoverId, setOpenPopoverId] = useState<string | null>(null);


  // function chengeValue(event: any) {
  //   setGender(event.target.value);
  // }

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

  useEffect(() => {
    axios
      .get(`${URL}/get/employeeStatus`)
      .then((res) => {
        setDataEmployeeStatus(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmitPosition = async (event: any) => {
    event.preventDefault();
    axios
      .post(`${URL}/create/employees`, {
        lastName,
        firstName,
        middleName,
        gender,
        personnelNumber,
        position,
        divisions,
        employeeStatus,
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
        onClose();
      })
      .catch((error) => console.log(error));
  };


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

  // const togglePopover = (id: string) => {
  //   setOpenPopoverId(isOpen === id ? null : id);
  // };

  // useEffect(() => {
  //   const handleClickOutside = (event: any) => {
  //     if (!event.target.closest(".wrapper"))
  //       setOpenPopoverId(null);
  //   };
  //   document.addEventListener("click", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);
  // onClick={() => togglePopover}

  return (
    <>
      {isOpen && ( 
        <div className={"pade"}>
        <div className={"wrapper"}>
          <form onSubmit={handleSubmitPosition}>
            <h2>Добавление сотрудника</h2>
            <h3>Личная информация</h3>
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
            <div className={"personal_information"}>
              <label htmlFor="gender">Пол</label>
              <div className={"gender_radio"}>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Женский"
                    checked={gender == "Женский" ? true : false}
                    onChange={(e: any) => setGender(e.target.value)}
                  />
                  Женский
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Мужской"
                    checked={gender == "Мужской" ? true : false}
                    onChange={(e: any) => setGender(e.target.value)}
                  />
                  Мужской
                </label>
              </div>
            </div>
            <hr className={"dividing_line"} />
            <h3>Рабочая информация</h3>
            <div className={"input_div"}>
              <label htmlFor="personnelNumber">Табельный номер</label>
                <input
                  id="personnelNumber"
                  type="number"
                  placeholder="Введите табельный номер"
                  onChange={(e: any) => setPersonnelNumber(e.target.value)}
                  value={personnelNumber}
                  required
                />
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
            <div className={"input_div"}>
              <label>Статус</label>
              <div className={"status_radio"}>
                {dataEmployeeStatus.map((status) => (
                  <label key={status._id}>
                    <input
                      type="radio"
                      name="employeeStatus"
                      value={status._id}
                      checked={employeeStatus === status._id}
                      onChange={() => setEmployeeStatus(status._id)}
                    />
                    {status.title}
                  </label>
                ))}
              </div>
            </div>
            <div className={"form_buttons"}>
              <Link to={"/employees"}>
                <button className={"form_btn cancel"} onClick={onClose}>Отменить</button>
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
export default CreateEmployees;

