const mongoose = require('mongoose');

const ServiceNoteSchema = new mongoose.Schema(
    {
        title: String,

    }
)

const ServiceNoteModal = mongoose.model("ServiceNote", ServiceNoteSchema)
module.exports = ServiceNoteModal
