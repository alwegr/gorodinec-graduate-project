import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../../components/sidebar/Sidebar";
import { sidebarItems } from "../../../components/sidebar/DataSidebar";

function ContractPage() {
  useEffect(() => {
    // axios
    //   .get(`${URL}/get/serviceNote`)
    //   .then((res) => {
    //     setDataServiceNote(res.data);
    //   })
    //   .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Sidebar items={sidebarItems}></Sidebar>
    </>
  );
}
export default ContractPage;
