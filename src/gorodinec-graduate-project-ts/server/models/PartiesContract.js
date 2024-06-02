const mongoose = require('mongoose');

const PartiesContractSchema = new mongoose.Schema(
    {
        title: String,
    }
)

const PartiesContractModal = mongoose.model("PartiesContract", PartiesContractSchema)
module.exports = PartiesContractModal
