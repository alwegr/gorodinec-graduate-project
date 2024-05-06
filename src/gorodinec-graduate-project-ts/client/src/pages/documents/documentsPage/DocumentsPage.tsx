import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Document_style.css";

interface Document {
  _id: string;
  name: string;
  numberDocument: string;
  date: string;
  creator: {
    _id: string;
    lastName: string;
    firstName: string;
    middleName: string;
  };
  viewDocument: {
    name: string;
  };
}

function DocumentsPage() {
  const [dataDocument, setDataDocument] = useState<Document[]>([]);
  const [filteredDocument, setFilteredDocumet] = useState<Document[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get/documents")
      .then((res) => {
        setDataDocument(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section>
        <div>
          <div className={"btn_add_document"}>
            <Link to="/documents/createDocument">
              <button className={"add_document"}>Добавить</button>
            </Link>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Наименование</th>
              <th>Дата</th>
              <th>Создатель</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {dataDocument.map((document, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{document.name}</td>
                <td>{document.date}</td>
                <td>
                  {document.creator.lastName}
                  {document.creator.firstName.charAt(0)}
                  {document.creator.middleName.charAt(0)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
export default DocumentsPage;
