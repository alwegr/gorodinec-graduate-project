const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const employee = require("./router/Employee");
const position = require("./router/Position");
const divisions = require("./router/Divisions");
const employeeStatus = require("./router/EmployeeStatus");
const serviceNote = require("./router/ServiceNote")
const viewServiceNote = require("./router/ViewServiceNote")
const currency = require("./router/Currency")
const contract = require("./router/Contract")
const statusContract = require("./router/StatusContract")
const employmentContract = require("./router/EmploymentContract")
const counterparties = require("./router/Counterparties")
const counterpartiesAgreement = require("./router/CounterpartiesAgreement")
const app = express();
dotenv.config()
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT 
mongoose
  .connect("mongodb://localhost:27017/Document_flow")
  .then((db) => console.log("База данных подключена"))
  .catch((error) => console.log(error));

// сотрудники
app.use("/", employee);
app.use("/", divisions);
app.use("/", position);
app.use("/", employeeStatus);
// служебная записка
app.use("/", serviceNote)
app.use("/", viewServiceNote)
// договор
app.use("/", currency)
app.use("/", contract)
app.use("/", statusContract)
app.use("/", counterparties)
app.use("/", counterpartiesAgreement)
// трудовой договор
app.use("/", employmentContract)

app.listen(`${PORT}`, () => {
  console.log("Сервер запущен");
});
