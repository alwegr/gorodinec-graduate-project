const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const employee = require("./router/Employee");
const position = require("./router/Position");
const divisions = require("./router/Divisions");
const employeeStatus = require("./router/EmployeeStatus")
const document = require("./router/Document")

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/Document_flow")
  .then((db) => console.log("База данных подключена"))
  .catch((error) => console.log(error));

app.use("/", employee);
app.use("/", divisions);
app.use("/", position);
app.use("/", employeeStatus);
app.use("/", document);

app.listen(3001, () => {
  console.log("Сервер запущен");
});
