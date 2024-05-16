const mongoose = require('mongoose');

const DivisionsSchema = new mongoose.Schema(
    {
        title: String,
    }
)

const DivisionsModal = mongoose.model("Divisions", DivisionsSchema)
module.exports = DivisionsModal
