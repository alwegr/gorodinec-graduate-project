import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import TabCreateDocuments from "../../../components/tabDocuments/TabCreateDocuments";
import "../../../style/Global_style.css";

function Contract() {
  return (
    <>
      <div className={"header_documents"}>
        <div className={"header_content"}>
          <IoIosArrowBack className={"arrow_documents"} />
          <Link to={"/documents"} className={"header_link"}>
            Документы
          </Link>
          <p>/ Договор</p>
        </div>
      </div>
      <section>
        <TabCreateDocuments />
        <h2>Договор</h2>
      </section>
    </>
  );
}
export default Contract;
