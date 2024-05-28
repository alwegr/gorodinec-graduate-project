import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import Sidebar from "../../components/sidebar/Sidebar";
import { sidebarItems } from "../../components/sidebar/DataSidebar";

function ReferenceBook() {
  return (
    <>
      <Sidebar items={sidebarItems}>
        <div className={"header_documents"}>
          <div className={"header_content"}>
            <IoIosArrowBack className={"arrow_documents  header_link"} />
            <p>Справочник</p>
          </div>
        </div>
      </Sidebar>
    </>
  );
}
export default ReferenceBook;
