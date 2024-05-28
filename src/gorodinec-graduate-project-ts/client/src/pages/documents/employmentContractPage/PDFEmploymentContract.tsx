import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { EmploymentContract } from "../DocumentInterface";

const URL = process.env.REACT_APP_URL;

function PDFEmploymentContract({ employmentContractId }: any) {
  const { id } = useParams<{ id: string }>();
  const [dataEmploymentContract, setDataEmploymentContract] =
    useState<EmploymentContract | null>(null);

  useEffect(() => {
    axios
      .get(`${URL}/get/employmentContract/${id}`)
      .then((res) => {
        setDataEmploymentContract(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const component = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => component.current,
    documentTitle: "Трудовой договор",
  });
  if (!dataEmploymentContract) {
    return <div>Загрузка...</div>;
  }

  return (
    <>
      <div ref={component}>
        <div>
          <p>{dataEmploymentContract.nameEmploymentContract}</p>
          <p>{new Date(dataEmploymentContract.dateEmploymentContract).toLocaleDateString()}</p>
          <p>
            {`${dataEmploymentContract.lastName} ${dataEmploymentContract.firstName} ${dataEmploymentContract.middleName}`}
          </p>
          <p>{dataEmploymentContract.position.title}</p>
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
export default PDFEmploymentContract;
