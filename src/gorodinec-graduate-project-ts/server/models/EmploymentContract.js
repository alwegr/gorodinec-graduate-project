const mongoose = require("mongoose");

const EmploymentContractSchema = new mongoose.Schema({
  nameEmploymentContract:{
    type: String,
    enum: ["Трудовой договор"]
  },
  dateEmploymentContract: { type: Date, default: Date.now },
  lastName: String,
  firstName: String,
  middleName: String,
  address: String,
  position:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Position",
  },
  seriesPassport: Number,
  numberPassport: Number,
  issued: String,
  dateOfIssue: Date,
  departmentCode: Number,
  salary: Number,
});

const EmploymentContractModel = mongoose.model("EmploymentContract", EmploymentContractSchema);
module.exports = EmploymentContractModel;
