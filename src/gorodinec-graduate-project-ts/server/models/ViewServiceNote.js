const mongoose = require('mongoose');

const ViewServiceNoteSchema = new mongoose.Schema(
    {
        title: String,
    }
)

const ViewServiceNoteModal = mongoose.model("ViewServiceNote", ViewServiceNoteSchema)
module.exports = ViewServiceNoteModal
