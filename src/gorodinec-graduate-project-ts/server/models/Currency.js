const mongoose = require('mongoose');

const CurrencySchema = new mongoose.Schema(
    {
        title: String,
        digitalCode: String,
        letterCode: String,

    }
)

const CurrencyModal = mongoose.model("Currency", CurrencySchema)
module.exports = CurrencyModal
