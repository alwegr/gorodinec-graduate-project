const express = require("express");
const DocumentsModel = require("../models/Document");
const router = express.Router();

router.get("/get/documents", (req, res) => {
  DocumentsModel.find()
    .populate("employee")
    .then((documents) => res.json(documents))
    .catch((err) => res.json(err));
});
router.get("/get/documents/:id", (req, res) => {
  const id = req.params.id;
  DocumentsModel.findById({ _id: id })
    .populate("employee")
    .then((post) => res.json(post))
    .catch((err) => console.log(err));
});
router.post("/create/documents", (req, res) => {
  const { name, numberDocument, date, creator, viewDocument } = req.body;
  const newProject = new DocumentsModel({
    name,
    numberDocument,
    date,
    creator,
    viewDocument,
  });
  newProject
    .save()
    .then((documents) => res.json(documents))
    .catch((err) => res.json(err));
});

module.exports = router;
