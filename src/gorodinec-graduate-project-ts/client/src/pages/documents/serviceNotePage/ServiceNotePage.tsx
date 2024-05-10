import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TabCreateDocuments from "../../../components/tabDocuments/TabCreateDocuments";
import Select from "react-select";
import { style } from "../../../components/ui/select";
import { IoIosArrowBack } from "react-icons/io";
import "../../../style/Global_style.css";
import "./ServiceNote_style.css"

const URL = process.env.REACT_APP_URL;

function ServiceNote() {
  const [employee, setEmployee] = useState("");
  const [dataEmployee, setDataEmployee] = useState<any[]>([]);
  const [typeOfServiceNote, setTypeOfServiceNote] = useState("");
  const [dataTypeOfServiceNote, setDataTypeOfServiceNote] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(`${URL}/get/employees`)
      .then((res) => {
        setDataEmployee(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${URL}/get/serviceNote`)
      .then((res) => {
        setDataTypeOfServiceNote(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleEmployeeChange = (selectedOption: any) => {
    if (selectedOption) {
      setEmployee(selectedOption.value);
    }
  };

  const handleTypeOfServiceNoteChange = (selectedOption: any) => {
    if (selectedOption) {
      setTypeOfServiceNote(selectedOption.value);
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
          <p>/ Служебная записка</p>
        </div>
      </div>
      <section>
        <TabCreateDocuments />
        <div className={"page_serviceNote"}>
          <div className={"wrapper_serviceNote"}>
            <form>
              <div>
                <label>ФИО</label>
                <div className="select_position">
                  <Select
                    options={dataEmployee.map((employee) => ({
                      value: employee._id,
                      label: `${employee.lastName} ${employee.firstName} ${employee.middleName}`,
                    }))}
                    onChange={handleEmployeeChange}
                    styles={style}
                    isClearable
                    isSearchable
                    required
                    placeholder={"Выберите себя"}
                  />
                </div>
              </div>
              <div>
                <label>Кому</label>
                <div className="select_position">
                  <Select
                    options={dataEmployee.map((employee) => ({
                      value: employee._id,
                      label: `${employee.lastName} ${employee.firstName} ${employee.middleName}`,
                    }))}
                    onChange={handleEmployeeChange}
                    styles={style}
                    isClearable
                    isSearchable
                    required
                    placeholder={"Кому адресована"}
                  />
                </div>
              </div>
              <div>
                <label>Вид служебной записки</label>
                <div className="select_position">
                  <Select
                    options={dataTypeOfServiceNote.map((typeOfServiceNote) => ({
                      value: typeOfServiceNote._id,
                      label: typeOfServiceNote.title,
                    }))}
                    onChange={handleTypeOfServiceNoteChange}
                    styles={style}
                    isClearable
                    isSearchable
                    required
                    placeholder={"Выберите вид"}
                  />
                </div>
              </div>
              <div>
                <label>Содержание</label>
                <div>
                  <textarea placeholder="Содержание, что Вас беспокоит" />
                </div>
              </div>
              <div className={"form_buttons"}>
                <Link to={"/documents"}>
                  <button className={"form_btn cancel"}>Отменить</button>
                </Link>
                <button className={"form_btn add"}>Добавить</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
export default ServiceNote;
