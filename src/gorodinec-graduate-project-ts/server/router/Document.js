const express = require("express");
const DocumentsModel = require("../models/Document");
const ServiceNoteModal = require("../models/ServiceNote");
const router = express.Router();

router.get("/get/documents", (req, res) => {
  DocumentsModel.find()
    .populate("serviceNote")
    .then((documents) => res.json(documents))
    .catch((err) => res.json(err));
});
router.get("/get/documents/:id", (req, res) => {
  const id = req.params.id;
  DocumentsModel.findById({ _id: id })
    .populate("serviceNote")
    .then((post) => res.json(post))
    .catch((err) => console.log(err));
});
router.post("/create/documents", async (req, res) => {
  try {
    const serviceNote = await ServiceNoteModal.create(req.body.serviceNote);

    const document = new DocumentsModel({
      name: req.body.name,
      numberDocument: req.body.numberDocument,
      date: req.body.date,
      serviceNote: serviceNote._id,
    });

    const newDocument = await document.save();
    res.status(201).json(newDocument);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
