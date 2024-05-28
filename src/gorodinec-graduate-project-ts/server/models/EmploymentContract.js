const mongoose = require("mongoose");

const EmploymentContractSchema = new mongoose.Schema({
  nameEmploymentContract:{
    type: String,
    enum: ["Трудовой договор"]
  },
  dateEmploymentContract: Date,
  lastName: String,
  firstName: String,
  middleName: String,
  gender: String,
//   personnelNumber: Number,
  // position: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Position",
  // },
  // divisions: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Divisions",
  // },
  seriesPassport: Number,
  numberPassport: Number,
  issued: String,
  dateOfIssue: Date,
  departmentCode: Number,
  salary: Number,
});

const EmploymentContractModel = mongoose.model("EmploymentContract", EmploymentContractSchema);
module.exports = EmploymentContractModel;