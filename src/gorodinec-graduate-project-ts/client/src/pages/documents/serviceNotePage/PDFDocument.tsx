import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { ServiceNote } from "../DocumentInterface";

const URL = process.env.REACT_APP_URL;

function PDFDocument({ serviceNoteId }: any) {
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
      <div className={"container_btn_print"}>
        <button onClick={handlePrint} className={"print"}>
          Печатать
        </button>
      </div>
      <div style={{}}>
        <div style={{ position: "relative", top:"0", left:"15%", width: "1240px", display: "flex", justifyContent: "center" }}>
          <div ref={component} style={{ position: "relative", margin: "35px" }}>
            <div>
              <p style={{ textAlign: "end" }}>
                Уважаемый(ая)
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
        </div>
      </div>
    </>
  );
}
export default PDFDocument;
