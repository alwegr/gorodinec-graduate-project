import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import TabCreateDocuments from "../../../components/tabDocuments/TabCreateDocuments";
import Select from "react-select";
import { style } from "../../../components/ui/select";
import { IoIosArrowBack } from "react-icons/io";
import "../../../style/Global_style.css";
import "./ServiceNote_style.css";

const URL = process.env.REACT_APP_URL;

function ServiceNote() {
  const [creator, setCreator] = useState("");
  const [dataCreator, setDataCreator] = useState<any[]>([]);
  const [addresser, setAddresser] = useState("");
  const [dataAddresser, setDataAddresser] = useState<any[]>([]);
  const [viewServiceNote, setViewServiceNote] = useState("");
  const [dataViewServiceNote, setDataViewServiceNote] = useState<any[]>([]);
  const [content, setContent] = useState("");
  const navigate = useNavigate();

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
        navigate("/documents");
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
                    placeholder="Содержание, что Вас беспокоит"
                  />
                </div>
              </div>
              <div className={"form_buttons"}>
                <Link to={"/documents"}>
                  <button className={"form_btn cancel"}>Отменить</button>
                </Link>
                <button className={"form_btn add"}>Добавить</button>
                {/* <Link to={"/documents/createDocument/serviceNote/pdf"}>
                    <button>Просмотр</button>
                </Link> */}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
export default ServiceNote;





// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { IoIosArrowBack } from "react-icons/io";
// import { Document, ServiceNote, Employee } from "../DocumentInterface";
// import TabCreateDocuments from "../../../components/tabDocuments/TabCreateDocuments";

// const URL = process.env.REACT_APP_URL;

// function ServiceNotePage() {
//   const [numberDocument, setNumberDocument] = useState("");
//   const [date, setDate] = useState("");
//   const [serviceNote, setServiceNote] = useState<ServiceNote>({
//     _id: "",
//     nameServiceNote: "Служебная записка",
//     creator: {
//       _id: "",
//       lastName: "",
//       firstName: "",
//       middleName: "",
//     },
//     addresser: {
//       _id: "",
//       lastName: "",
//       firstName: "",
//       middleName: "",
//     },
//     viewServiceNote: {
//       _id: "",
//       title: "",
//     },
//     content: "",
//   });
//   const [employees, setEmployees] = useState<Employee[]>([]);

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get<Employee[]>(`${URL}/get/employees`);
//         setEmployees(response.data);
//       } catch (error) {
//         console.error("Ошибка при получении списка сотрудников:", error);
//       }
//     };

//     fetchEmployees();
//   }, []);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("отправка данных: ", serviceNote);
//     try {
//       const response = await axios.post(
//         "http://localhost:3001/create/documents",
//         document
//       );
//       console.log("Документ успешно добавлен:", response.data);
//       setNumberDocument("");
//       setDate("");
//       setServiceNote({
//         _id: "",
//         nameServiceNote: "Служебная записка",
//         creator: {
//           _id: "",
//           lastName: "",
//           firstName: "",
//           middleName: "",
//         },
//         addresser: {
//           _id: "",
//           lastName: "",
//           firstName: "",
//           middleName: "",
//         },
//         viewServiceNote: {
//           _id: "",
//           title: "",
//         },
//         content: "",
//       });
//     } catch (error) {
//       console.error("Ошибка при добавлении документа:", error);
//     }
//   };

//   return (
//     <>
//       <div className={"header_documents"}>
//         <div className={"header_content"}>
//           <IoIosArrowBack className={"arrow_documents"} />
//           <Link to={"/documents"} className={"header_link"}>
//             Документы
//           </Link>
//           <p>/ Служебная записка</p>
//         </div>
//       </div>
//       <section>
//         <TabCreateDocuments />
//         <div>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               value={numberDocument}
//               onChange={(e) => setNumberDocument(e.target.value)}
//               placeholder="Номер документа"
//               required
//             />
//             <input
//               type="date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//               placeholder="Дата"
//               required
//             />
//             <select
//               value={serviceNote.creator._id}
//               onChange={(e) =>
//                 setServiceNote({
//                   ...serviceNote,
//                   creator: employees.find(
//                     (employee) => employee._id === e.target.value
//                   ) || {
//                     _id: "",
//                     lastName: "",
//                     firstName: "",
//                     middleName: "",
//                   },
//                 })
//               }
//             >
//               <option value="">Выберите создателя</option>
//               {employees.map((employee) => (
//                 <option key={employee._id} value={employee._id}>
//                   {employee.lastName} {employee.firstName} {employee.middleName}
//                 </option>
//               ))}
//             </select>

//             <select
//               value={serviceNote.addresser._id}
//               onChange={(e) =>
//                 setServiceNote({
//                   ...serviceNote,
//                   addresser: employees.find(
//                     (employee) => employee._id === e.target.value
//                   ) || {
//                     _id: "",
//                     lastName: "",
//                     firstName: "",
//                     middleName: "",
//                   },
//                 })
//               }
//             >
//               <option value="">Выберите адресата</option>
//               {employees.map((employee) => (
//                 <option key={employee._id} value={employee._id}>
//                   {employee.lastName} {employee.firstName} {employee.middleName}
//                 </option>
//               ))}
//             </select>

//             <textarea
//               value={serviceNote.content}
//               onChange={(e) =>
//                 setServiceNote({ ...serviceNote, content: e.target.value })
//               }
//               placeholder="Содержание служебной записки"
//               required
//             />

//             <button className={"form_btn add"} type="submit">
//               Добавить
//             </button>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// }

// export default ServiceNotePage;

