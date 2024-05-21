import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

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
  return (
    <>
      <Document>
        <Page size="A4" style={style.page}>
          <Text style={style.header}>
            Индивидуальному предпринимателю Ромашову Роману Владимировичу
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Page>
      </Document>
    </>
  );
}
export default PDFDocument;
