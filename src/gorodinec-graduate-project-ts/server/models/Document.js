// const mongoose = require("mongoose");

// const DocumentsSchema = new mongoose.Schema({
//   name: String,
//   numberDocument: Number,
//   date: { type: Date, default: Date.now },
//   serviceNote: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "ServiceNote",
//   },

// });

// const DocumentsModel = mongoose.model("Documents", DocumentsSchema);
// module.exports = DocumentsModel;


const mongoose = require("mongoose");

const DocumentsSchema = new mongoose.Schema({
  numberDocument: Number,
  date: Date,
  serviceNote: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ServiceNote",
  }
});

const DocumentsModel = mongoose.model("Documents", DocumentsSchema);
module.exports = DocumentsModel;

