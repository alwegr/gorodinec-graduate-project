const mongoose = require("mongoose");

const EmployeesSchema = new mongoose.Schema({
  lastName: String,
  firstName: String,
  middleName: String,
  gender: String,
  personnelNumber: Number,
  position: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Position",
  },
  employeeStatus: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "EmployeeStatus",
  },
  divisions: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Divisions",
  },
});

const EmployeesModel = mongoose.model("Employees", EmployeesSchema);
module.exports = EmployeesModel;