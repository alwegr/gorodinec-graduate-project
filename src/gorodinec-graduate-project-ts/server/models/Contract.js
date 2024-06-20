const mongoose = require('mongoose');

const ContractSchema = new mongoose.Schema(
    {
        nameContract:{
            type: String,
            enum: ["Договор"]
        },
        dateStart: { type: Date, default: Date.now },
        dateEnd: Date,
        currency: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Currency",
        },
        price: Number,
        statusContract: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "StatusContract",
        },
        subjectAgreement: String,
        createContract: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Employees",
        },
        counterparties: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Counterparties",
        },

    }
)

const ContractModal = mongoose.model("Contract", ContractSchema)
module.exports = ContractModal
