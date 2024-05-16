const mongoose = require("mongoose");

const ServiceNoteSchema = new mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employees",
  },
  addresser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employees",
  },
  ViewServiceNote: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ViewServiceNote",
  },
  content: String,
});

const ServiceNoteModal = mongoose.model("ServiceNote", ServiceNoteSchema);

module.exports = ServiceNoteModal;
