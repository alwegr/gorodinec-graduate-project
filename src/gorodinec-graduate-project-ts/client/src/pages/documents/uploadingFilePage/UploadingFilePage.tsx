import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import TabCreateDocuments from "../../../components/tabDocuments/TabCreateDocuments";
import "../../../style/Global_style.css";

function UploadingFile() {
  return (
    <>
      <div className={"header_documents"}>
        <div className={"header_content"}>
          <IoIosArrowBack className={"arrow_documents"} />
          <Link to={"/documents"} className={"header_link"}>
            Документы
          </Link>
          {/* <p>/ Создание документов</p> */}
          <p>/ Загрузить файл</p>
        </div>
      </div>
      <section>
        <TabCreateDocuments />
        <p>Загрузка файла</p>
      </section>
    </>
  );
}
export default UploadingFile;
