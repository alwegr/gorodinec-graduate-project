import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import TabCreateDocuments from "../../../components/tabCeateDocuments/TabCreateDocuments";
import { CiFileOn } from "react-icons/ci";
import "../../../style/Global_style.css";
import "./UploadingFile_style.css";

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
        {/* <div className={"page_file"}>
          <div className={"wrapper_file"}>
            <input type="file" />
            <span>Выберите файл</span>
          </div>
        </div> */}

        <div className="page_file">
          <div className="wrapper_file">
            <label className="label">
              <div>
                <CiFileOn className={"icon_file"} />
              </div>
              <div className={"proverks"}>
                <div>
                  <span className="title_file">Добавить файл</span>
                </div>
                <input type="file" />
              </div>
            </label>
          </div>
        </div>
      </section>
    </>
  );
}
export default UploadingFile;
