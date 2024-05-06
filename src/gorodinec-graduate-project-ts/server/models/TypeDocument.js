const mongoose = require("mongoose");

const TypeDocumentsSchema = new mongoose.Schema(
    {
        name: String,
    }
);

const TypeDocumentsModel = mongoose.model("TypeDocuments", TypeDocumentsSchema);
module.exports = TypeDocumentsModel;