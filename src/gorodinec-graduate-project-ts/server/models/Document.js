const mongoose = require("mongoose");

const DocumentsSchema = new mongoose.Schema({
  name: String,
  numberDocument: Number,
  date: Date,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employees",
  },
  viewDocument: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ViewDocuments",
  }
});

const DocumentsModel = mongoose.model("Documents", DocumentsSchema);
module.exports = DocumentsModel;