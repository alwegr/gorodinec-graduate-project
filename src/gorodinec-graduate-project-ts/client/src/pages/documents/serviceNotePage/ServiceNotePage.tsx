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
  const [creator, setCreator] = useState("");
  const [dataCreator, setDataCreator] = useState<any[]>([]);
  const [addresser, setAddresser] = useState("");
  const [dataAddresser, setDataAddresser] = useState<any[]>([]);
  const [viewServiceNote, setViewServiceNote] = useState("");
  const [dataViewServiceNote, setDataViewServiceNote] = useState<any[]>([]);
  const [content, setContent] = useState("");


  useEffect(() => {
    axios
      .get(`${URL}/get/employees`)
      .then((res) => {
        setDataCreator(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${URL}/get/employees`)
      .then((res) => {
        setDataAddresser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${URL}/get/viewServiceNote`)
      .then((res) => {
        setDataViewServiceNote(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmitServiceNote = async (event: any) => {
    event.preventDefault();
    axios
      .post(`${URL}/create/serviceNote`, {
        creator,
        addresser,
        viewServiceNote,
        content,
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  // Создатель
  const handleCreatorChange = (selectedOption: any) => {
    if (selectedOption) {
      setCreator(selectedOption.value);
    }
  };
  // Кому
  const handleAddresserChange = (selectedOption: any) => {
    if (selectedOption) {
      setAddresser(selectedOption.value);
    }
  };
  // Вид служебной записки
  const handleTypeServiceNoteChange = (selectedOption: any) => {
    if (selectedOption) {
      setViewServiceNote(selectedOption.value);
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
            <form onSubmit={handleSubmitServiceNote}>
              <div>
                <label>ФИО</label>
                <div className="select_position">
                  <Select
                    options={dataCreator.map((creator) => ({
                      value: creator._id,
                      label: `${creator.lastName} ${creator.firstName} ${creator.middleName}`,
                    }))}
                    onChange={handleCreatorChange}
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
                    options={dataAddresser.map((addresser) => ({
                      value: addresser._id,
                      label: `${addresser.lastName} ${addresser.firstName} ${addresser.middleName}`,
                    }))}
                    onChange={handleAddresserChange}
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
                    options={dataViewServiceNote.map((viewServiceNote) => ({
                      value: viewServiceNote._id,
                      label: viewServiceNote.title,
                    }))}
                    onChange={handleTypeServiceNoteChange}
                    styles={style}
                    isClearable
                    isSearchable
                    required
                    placeholder={"Выберите вид"}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="content">Содержание</label>
                <div>
                  <textarea 
                    id="content"
                    onChange={(e: any) => setContent(e.target.value)}
                    value={content}
                    required
                    placeholder="Содержание, что Вас беспокоит" />
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
