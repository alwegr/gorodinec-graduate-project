import React, { useRef } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useReactToPrint } from "react-to-print";
import PDFServiceNote from "../../pages/documents/serviceNotePage/PDFServiceNote";

function ButtonServiceNote() {
  // const componentRef = useRef<HTMLDivElement>(null);
  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  //   documentTitle: "Служебная засписка",
  // });
  return (
    <>

      <PDFDownloadLink document={<PDFServiceNote />}>  
        <button>скачать</button>
      </PDFDownloadLink>
    </>
  );
}
export default ButtonServiceNote;
