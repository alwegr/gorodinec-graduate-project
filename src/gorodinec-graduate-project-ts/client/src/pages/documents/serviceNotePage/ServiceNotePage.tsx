import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import { style } from "../../../components/ui/select";
import { Document } from "../DocumentInterface";

const URL = process.env.REACT_APP_URL;

function ServiceNotePage() {
  // const [date, setDate] = useState("");
  // const [number, setNumber] = useState("");
  // const [creator, setCreator] = useState("");
  // const [dataCreator, setDataCreator] = useState<any[]>([]);
  // const [addresser, setAddresser] = useState("");
  // const [dataAddresser, setDataAddresser] = useState<any[]>([]);
  // const [viewServiceNote, setViewServiceNote] = useState("");
  // const [dataViewServiceNote, setDataViewServiceNote] = useState<any[]>([]);
  // const [content, setContent] = useState("");

  // useEffect(() => {
  //   axios
  //     .get(`${URL}/get/employees`)
  //     .then((res) => {
  //       setDataCreator(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get(`${URL}/get/employees`)
  //     .then((res) => {
  //       setDataAddresser(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get(`${URL}/get/viewServiceNote`)
  //     .then((res) => {
  //       setDataViewServiceNote(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);


  const [documents, setDocuments] = useState<Document>({
    _id: "",
    name: "",
    numberDocument: "",
    date: "",
    serviceNote: {
      _id: "",
      nameServiceNote: "",
      creator: {
        _id: "",
        lastName: "",
        firstName: "",
        middleName: "",
      },
      addresser: {
        _id: "",
        lastName: "",
        firstName: "",
        middleName: "",
      },
      viewServiceNote: {
        _id: "",
        title: "",
      },
      content: "",
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${URL}/create/documents`, documents);
      console.log("Клиент успешно добавлен:", response.data);
      setDocuments({
        _id: "",
        name: "",
        numberDocument: "",
        date: "",
        serviceNote: {
          _id: "",
          nameServiceNote: "",
          creator: {
            _id: "",
            lastName: "",
            firstName: "",
            middleName: "",
          },
          addresser: {
            _id: "",
            lastName: "",
            firstName: "",
            middleName: "",
          },
          viewServiceNote: {
            _id: "",
            title: "",
          },
          content: "",
        },
      });
    } catch (error) {
      console.error("Ошибка при добавлении клиента:", error);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'gender') {

    } else {
      setDocuments({ ...documents, [name]: value });
    }
};

  // const handleCreatorChange = (selectedOption: any) => {
  //   if (selectedOption) {
  //     setCreator(selectedOption.value);
  //   }
  // };
  // const handleAddresserChange = (selectedOption: any) => {
  //   if (selectedOption) {
  //     setAddresser(selectedOption.value);
  //   }
  // };
  // const handleViewServiceNoteChange = (selectedOption: any) => {
  //   if (selectedOption) {
  //     setViewServiceNote(selectedOption.value);
  //   }
  // };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name="number"
            onChange={handleChange}
            value={documents.numberDocument}
            placeholder="Номер"
            required
          />
          <input
            type="date"
            name="date"
            onChange={handleChange}
            value={documents.date}
            placeholder="Дата"
            required
          />
          {/* <label htmlFor="creator">Создатель</label>
          <div className="select_creator">
            <Select
              options={documents.serviceNote.content.map((creator : any) => ({
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
          <label htmlFor="addresser">Кому</label>
          <div className="select_addresser">
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
              placeholder={"Кому"}
            />
          </div>
          <label htmlFor="view">Вид</label>
          <div className="select_addresser">
            <Select
              options={dataViewServiceNote.map((viewServiceNote) => ({
                value: viewServiceNote._id,
                label: `${viewServiceNote.title}`,
              }))}
              onChange={handleViewServiceNoteChange}
              styles={style}
              isClearable
              isSearchable
              required
              placeholder={"Вид"}
            />
          </div> */}
          {/* <label htmlFor="content">Содержание</label>
          <div>
            <textarea
              id="content"
              value={documents.content}
              required
              placeholder="Содержание, что Вас беспокоит"
            />
          </div> */}
        </form>
        <button className={"form_btn add"} type="submit">Добавить</button>
      </div>
    </>
  );
}
export default ServiceNotePage;
