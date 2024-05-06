const mongoose = require("mongoose");

const ViewDocumentsSchema = new mongoose.Schema({
  name: String,
  typeDocuments: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TypeDocuments",
  }
});

const ViewDocumentsModel = mongoose.model("ViewDocuments", ViewDocumentsSchema);
module.exports = ViewDocumentsModel;