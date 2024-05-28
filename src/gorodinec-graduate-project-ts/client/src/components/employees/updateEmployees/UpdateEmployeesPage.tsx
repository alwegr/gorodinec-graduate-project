import React, { useEffect, useState } from "react";
import axios from "axios";
import { Employee } from "../../../pages/employees/EmployeeIterface";
import "../../../components/employees/createEmployees/CreateEmployees_style.css";
import Select from "react-select";
import { style } from "../../ui/select"

const URL = process.env.REACT_APP_URL;

function UpdateEmployees({ isOpen, onClose, employeeId }: any) {
  const id = employeeId;
  const [lastName, setLastName] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [middleName, setMiddleName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [personnelNumber, setPersonnelNumber] = useState<number | undefined>(
    undefined
  );
  const [position, setPosition] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [positionList, setPositionList] = useState<any[]>([]);
  const [divisions, setDivisions] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [divisionsList, setDivisionsList] = useState<any[]>([]);
  const [employeeStatusId, setEmployeeStatusId] = useState<string>("");
  const [employeeStatusList, setEmployeeStatusList] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Employee>(
          `${URL}/get/employees/${id}`
        );
        const {
          lastName,
          firstName,
          middleName,
          gender,
          personnelNumber,
          position,
          divisions,
          employeeStatus,
        } = response.data;
        setLastName(lastName);
        setFirstName(firstName);
        setMiddleName(middleName);
        setGender(gender);
        setPersonnelNumber(personnelNumber);
        setPosition({ value: position._id, label: position.title });
        setDivisions({ value: divisions._id, label: divisions.title });
        setEmployeeStatusId(employeeStatus._id);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();

    axios
      .get(`${URL}/get/position`)
      .then((res) => {
        setPositionList(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(`${URL}/get/employeeStatus`)
      .then((res) => {
        setEmployeeStatusList(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(`${URL}/get/divisions`)
      .then((res) => {
        setDivisionsList(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleUpdate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .put(`${URL}/update/employees/${id}`, {
        lastName,
        firstName,
        middleName,
        gender,
        personnelNumber,
        position: position?.value,
        divisions: divisions?.value,
        employeeStatus: employeeStatusId,
      })
      .then((res) => {
        window.location.reload();
        onClose();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {isOpen && (
        <div className={"page_popup"}>
          <div className={"wrapper"}>
            <form onSubmit={handleUpdate}>
              <h2>Редактирование сотрудника</h2>
              <h3>Личная информация</h3>
              <div className={"personal_information"}>
                <label htmlFor="lastName">Фамилия</label>
                <div>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Иванов"
                    className={"form_control"}
                    onChange={(e: any) => setLastName(e.target.value)}
                    value={lastName}
                  />
                </div>
              </div>
              <div className={"personal_information"}>
                <label htmlFor="firstName">Имя</label>
                <div>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Иван"
                    className={"form_control"}
                    onChange={(e: any) => setFirstName(e.target.value)}
                    value={firstName}
                  />
                </div>
              </div>
              <div className={"personal_information"}>
                <label htmlFor="middleName">Отчество</label>
                <div>
                  <input
                    id="middleName"
                    type="text"
                    placeholder="Иванович"
                    className={"form_control"}
                    onChange={(e: any) => setMiddleName(e.target.value)}
                    value={middleName}
                  />
                </div>
              </div>
              <div className={"personal_information"}>
                <label htmlFor="gender">Пол</label>
                <div className="gender_radio">
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      checked={gender === "Мужской"}
                      value="Мужской"
                      onChange={(e: any) => setGender(e.target.value)}
                    />
                    Мужской
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      checked={gender === "Женский"}
                      value="Женский"
                      onChange={(e: any) => setGender(e.target.value)}
                    />
                    Женский
                  </label>
                </div>
              </div>
              <hr className={"dividing_line"} />
              <h3>Рабочая информация</h3>
              {/* <div className={"input_div"}>
                <label htmlFor="middleName">Табельный номер</label>
                <div>
                  <input
                    type="number"
                    placeholder="Введите табельный номер"
                    className={"form_control"}
                    onChange={(e: any) => setPersonnelNumber(e.target.value)}
                    value={personnelNumber}
                  />
                </div>
              </div> */}
              <div className={"input_div"}>
                <label htmlFor="position">Должность</label>
                <div className="select_position">
                  <Select
                    options={positionList.map((positionItem) => ({
                      value: positionItem._id,
                      label: positionItem.title,
                    }))}
                    onChange={(selectedOption: any) =>
                      setPosition(selectedOption)
                    }
                    styles={style}
                    value={position}
                  />
                </div>
              </div>
              <div className={"input_div"}>
                <label htmlFor="divisions">Подразделения</label>
                <div className="select_divisions">
                  <Select
                    options={divisionsList.map((divisionsItem) => ({
                      value: divisionsItem._id,
                      label: divisionsItem.title,
                    }))}
                    onChange={(selectedOption: any) =>
                      setDivisions(selectedOption)
                    }
                    styles={style}
                    value={divisions}
                  />
                </div>
              </div>
              <div className={"input_div"}>
                <label>Статус</label>
                <div className="status_radio">
                  {employeeStatusList.map((status) => (
                    <label key={status._id}>
                      <input
                        type="radio"
                        name="employeeStatus"
                        value={status._id}
                        checked={employeeStatusId === status._id}
                        onChange={() => setEmployeeStatusId(status._id)}
                      />
                      {status.title}
                    </label>
                  ))}
                </div>
              </div>
              <div className={"form_buttons"}>
                  <button className={"form_btn cancel"} onClick={onClose}>
                    Отменить
                  </button>
                <button className={"form_btn add"}>Изменить</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default UpdateEmployees;
