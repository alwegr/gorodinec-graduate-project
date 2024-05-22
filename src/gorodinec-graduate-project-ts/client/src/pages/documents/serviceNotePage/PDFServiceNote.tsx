import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import { ServiceNote } from "../DocumentInterface";

const URL = process.env.REACT_APP_URL;

function PDFServiceNote({ serviceNoteId }: any) {
  const id = serviceNoteId;
  const [dataServiceNote, setDataServiceNote] = useState<ServiceNote[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/get/serviceNote/${id}`)
      .then((res) => {
        setDataServiceNote(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const component = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => component.current,
    documentTitle: "пробный документ",
  });
  return (
    <>
      <div ref={component} style={{ position: "relative", margin: "35px" }}>
        {dataServiceNote.map((serviceNote) => {
          return (
            <>
              <div key={serviceNote._id}>
                <p>{serviceNote.creator.lastName}</p>
              </div>
            </>
          );
        })}
        <div
          style={{
            position: "absolute",
            width: "200px",
            top: "0px",
            right: "35px",
            marginBottom: '40px'
          }}
        >
        <p style={{}}>Индивидуальному предпринимателю </p>
        </div>
        <div style={{ marginTop: "40px" }}>
          <h2 style={{ textAlign: "center" }}>Служебная записка</h2>
          <p style={{ textAlign: "justify", textIndent: "20px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <button onClick={handlePrint}>Print</button>
    </>
  );
}
export default PDFServiceNote;
