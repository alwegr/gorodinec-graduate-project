const mongoose = require("mongoose");

const ServiceNoteSchema = new mongoose.Schema({
  nameServiceNote:{
    type: String,
    enum: ["Служебная записка"]
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employees",
  },
  addresser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employees",
  },
  viewServiceNote: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ViewServiceNote",
  },
  content: String,

});

const ServiceNoteModal = mongoose.model("ServiceNote", ServiceNoteSchema);

module.exports = ServiceNoteModal;
