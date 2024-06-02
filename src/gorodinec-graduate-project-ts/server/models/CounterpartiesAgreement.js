const mongoose = require("mongoose");

const CounterpartiesAgreementSchema = new mongoose.Schema({
    contractId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Contract",
    },
    counterpartiesId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Counterparties",
    },
    partiesContract: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PartiesContract",
    },
});

const CounterpartiesAgreementModel = mongoose.model("CounterpartiesAgreement", CounterpartiesAgreementSchema);
module.exports = CounterpartiesAgreementModel;