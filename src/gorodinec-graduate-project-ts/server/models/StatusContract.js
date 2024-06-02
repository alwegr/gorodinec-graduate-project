const mongoose = require('mongoose');

const StatusContractSchema = new mongoose.Schema(
    {
        title: String,
    }
)

const StatusContractModal = mongoose.model("StatusContract", StatusContractSchema)
module.exports = StatusContractModal
