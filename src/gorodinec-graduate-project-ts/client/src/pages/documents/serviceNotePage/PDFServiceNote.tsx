import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { ServiceNote } from "../DocumentInterface";
import "./ServiceNote_style.css";

const URL = process.env.REACT_APP_URL;

function PDFServiceNote({ serviceNoteId }: any) {
  const { id } = useParams<{ id: string }>();
  const [dataServiceNote, setDataServiceNote] = useState<ServiceNote | null>(
    null
  );

  useEffect(() => {
    axios
      .get(`${URL}/get/serviceNote/${id}`)
      .then((res) => {
        setDataServiceNote(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const component = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => component.current,
    documentTitle: "Служебная записка",
  });
  if (!dataServiceNote) {
    return <div>Загрузка...</div>;
  }
  return (
    <>
      <div ref={component} style={{ position: "relative", margin: "35px" }}>
        <div>
          <p style={{ textAlign: "end" }}>
            {`${dataServiceNote.addresser.lastName} ${dataServiceNote.addresser.firstName} ${dataServiceNote.addresser.middleName}`}
          </p>
          <h3 style={{ textAlign: "center" }}>
            {dataServiceNote.nameServiceNote}
          </h3>
          <p>{dataServiceNote.viewServiceNote.title}</p>
          <p style={{ textAlign: "justify", textIndent: "20px" }}>
            {dataServiceNote.content}
          </p>
          <p style={{ textAlign: "end" }}>
            {`${dataServiceNote.creator.lastName} ${dataServiceNote.creator.firstName} ${dataServiceNote.creator.middleName}`}
          </p>
        </div>
      </div>
      <div className={"container_btn_print"}>
        <button onClick={handlePrint} className={"print"}>
          Печатать
        </button>
      </div>
    </>
  );
}
export default PDFServiceNote;
