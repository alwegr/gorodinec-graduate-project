import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { useReactToPrint } from "react-to-print";
import { ServiceNote } from "../DocumentInterface";
import "./ServiceNote_style.css";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Canvas,
  Font,
} from "@react-pdf/renderer";

const URL = process.env.REACT_APP_URL;

Font.register({
  family: "Roboto",
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf",
});

const style = StyleSheet.create({
  page: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontFamily: "Roboto",
  },
  header: {
    textAlign: "right",
    fontFamily: "Roboto",
  },
  contentHeader: {
    textAlign: "center",
    fontFamily: "Roboto",
  },
  text: {
    margin: 12,
    fontSize: 16,
    textAlign: "justify",
    fontFamily: "Roboto",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    right: 30,
    color: "grey",
  },
});

const PDFServiceNote = ({ serviceNoteId }: any) => {
  // const { id } = useParams<{ id: string }>();
  const id = serviceNoteId;
  const [dataServiceNote, setDataServiceNote] = useState<ServiceNote | null>(
    null
  );
  // const [nameServiceNote, setNameServiceNote] = useState<string>("")
  // const [dateServiceNote, setDateServiceNote] = useState<string>("")
  // const [creator, setCreator] = useState<{value: string; label: string} | null>(null)
  // const [creatorList, setCreatorList] = useState<any[]>([])
  // const [addresser, setAddresser] = useState<{value: string; label: string} | null>(null)
  // const [addresserList, setAddresserList] = useState<any[]>([])
  // const [content, setContent] = useState<string>("")

  useEffect(() => {
    axios
      .get(`${URL}/get/serviceNote/${id}`)
      .then((res) => {
        setDataServiceNote(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //  const serviceNoteData = async () =>{
  //   try{
  //     const serviceNoteData = await axios.get<ServiceNote>(
  //       `${URL}/get/serviceNote${id}`
  //     )
  //     const {nameServiceNote, dateServiceNote, creator, addresser, viewServiceNote, content} = serviceNoteData.data;
  //     setNameServiceNote(nameServiceNote);
  //     setDataServiceNote(dataServiceNote);
  //     setCreator({value: creator._id, label: creator._id});
  //     setAddresser({value: addresser._id, label: addresser._id})
  //     setContent(content);
  //   }catch(error){
  //     console.log(error)
  //   }
  //  };
  //  serviceNoteData();
  //   axios.get(`${URL}/get/employees`)
  //   .then((res) => {
  //     setCreatorList(res.data);
  //   })
  //   .catch((err) => console.log(err));

  //   axios.get(`${URL}/get/employees`)
  //   .then((res) => {
  //     setAddresserList(res.data);
  //   })
  //   .catch((err) => console.log(err));

  // }, [id]);

  if (!dataServiceNote) {
    return <div>Загрузка...</div>;
  }

  return (
    <>
      <Document>
        <Page size="A4" style={style.page}>
          <Text style={style.header}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis impedit modi maiores inventore eveniet quasi. Quo ea
            odio iste aperiam eum? Distinctio fuga sequi dolores neque
            consequatur. Officiis, temporibus in!
          </Text>
          <Text style={style.text}></Text>
          <Text style={style.text}></Text>
          <Text
            style={style.pageNumber}
            render={({ pageNumber }) => `${pageNumber}`}
            fixed
          />
        </Page>
      </Document>
    </>
  );
};
export default PDFServiceNote;
