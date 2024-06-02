const mongoose = require("mongoose");

const CounterpartiesSchema = new mongoose.Schema({
    nameCounterparties: String,
    inn: String,
    telephone: String,
    email: String,
    legalAddress: String,
    mailingAddress: String,
    bic: String,
    numberBic: Number,
});

const CounterpartiesModel = mongoose.model("Counterparties", CounterpartiesSchema);
module.exports = CounterpartiesModel;