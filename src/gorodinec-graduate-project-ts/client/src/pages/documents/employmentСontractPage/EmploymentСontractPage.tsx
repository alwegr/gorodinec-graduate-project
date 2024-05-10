import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import TabCreateDocuments from "../../../components/tabDocuments/TabCreateDocuments";
import "../../../style/Global_style.css";

function EmploymentСontract() {
  return (
    <>
      <div className={"header_documents"}>
        <div className={"header_content"}>
          <IoIosArrowBack className={"arrow_documents"} />
          <Link to={"/documents"} className={"header_link"}>
            Документы
          </Link>
          <p>/ Трудовой договор</p>
        </div>
      </div>
      <section>
        <TabCreateDocuments />
        <h2>Трудовой договор</h2>
      </section>
    </>
  );
}
export default EmploymentСontract;
