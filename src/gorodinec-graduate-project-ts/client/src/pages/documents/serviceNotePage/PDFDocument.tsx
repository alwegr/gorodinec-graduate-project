import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { ServiceNote } from "../DocumentInterface";

const style = StyleSheet.create({
  page: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
  },
  header: {
    textAlign: "right",
  },
  contentHeader: {
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 16,
    textAlign: "justify",
    fontFamily: "Ti",
  },
});

function PDFDocument() {
  const { id } = useParams<{ id: string }>();
  const [dataServiceNote, setDataServiceNote] = useState<ServiceNote | null>(
    null
  );

  useEffect(() => {
    axios
      .get(`${URL}/get/serviceNote/${id}`)
      .then((res) => {
        setDataServiceNote(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  if (!dataServiceNote) {
    return <div>Загрузка...</div>;
  }
  return (
    <>
      <Document>
        <Page size="A4" style={style.page}>
          <Text style={style.header}>
            Уважаемый(ая){" "}
            {`${dataServiceNote.addresser.lastName} ${dataServiceNote.addresser.firstName} ${dataServiceNote.addresser.middleName}`}
          </Text>
          <Text>{dataServiceNote.content}</Text>
          <Text>
          {`${dataServiceNote.creator.lastName} ${dataServiceNote.creator.firstName} ${dataServiceNote.creator.middleName}`}
          </Text>
        </Page>
      </Document>
    </>
  );
}
export default PDFDocument;
