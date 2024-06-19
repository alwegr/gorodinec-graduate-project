import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ServiceNote } from "../../../pages/documents/DocumentInterface";

const URL = process.env.REACT_APP_URL;

function ServiceNoteDetails({ isOpen, onClose, serviceNoteId }: any) {
  const id = serviceNoteId;
  const [dataServiceNote, setDataServiceNote] = useState<ServiceNote[]>([]);

  useEffect(() => {
    axios
      .get(`${URL}/get/serviceNote${id}`)
      .then((res) => {
        setDataServiceNote(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {isOpen && (
        <div className={"page_popup"}>
          <div className={"wrapper"}>
            {dataServiceNote.map((serviceNote) => (
              <div>
                <div>
                  <p>Наименвание: {serviceNote.nameServiceNote}</p>
                </div>
                <div>
                  <p>
                    Дата:{" "}
                    {new Date(serviceNote.dateServiceNote).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p>
                    Создатель: {serviceNote.creator.lastName}⠀
                    {serviceNote.creator.firstName.charAt(0)}.
                    {serviceNote.creator.middleName.charAt(0)}.
                  </p>
                </div>
                <div>
                  <p>
                    Адресат: {serviceNote.addresser.lastName}⠀
                    {serviceNote.addresser.firstName.charAt(0)}.
                    {serviceNote.addresser.middleName.charAt(0)}.
                  </p>
                </div>
                <div>
                  <p>
                    Вид служебной записки: {serviceNote.viewServiceNote.title}
                  </p>
                </div>
                <div>
                  <p>Содержание: {serviceNote.content}</p>
                </div>
                <button className={"form_btn cancel"} onClick={onClose}>
                  Отменить
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
export default ServiceNoteDetails;
