const mongoose = require("mongoose");

const DocumentsSchema = new mongoose.Schema({
  name: String,
  numberDocument: Number,
  date: Date,
  serviceNote: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ServiceNote",
  },

});

const DocumentsModel = mongoose.model("Documents", DocumentsSchema);
module.exports = DocumentsModel;

