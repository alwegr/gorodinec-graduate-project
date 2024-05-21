const express = require("express");
const router = express.Router();
const ServiceNoteModel = require("../models/ServiceNote");

// Получение
router.get("/get/serviceNote", (req, res) => {
  ServiceNoteModel.find()
    .populate("employees")
    .populate("viewServiceNote")
    .then((serviceNote) => res.json(serviceNote))
    .catch((err) => res.json(err));
});
router.get("/get/serviceNote/:id", (req, res) => {
  const id = req.params.id;
  ServiceNoteModel.findById({ _id: id })
    .populate("employees")
    .populate("viewServiceNote")
    .then((post) => res.json(post))
    .catch((err) => console.log(err));
});

// Добавление
router.post("/create/serviceNote", (req, res) => {
  const { creator, addresser, viewServiceNote, content } = req.body;
  const newProject = new ServiceNoteModel({
    nameServiceNote:'Служебная записка',
    creator,
    addresser,
    viewServiceNote,
    content,
  });
  newProject
    .save()
    .then((serviceNote) => res.json(serviceNote))
    .catch((err) => res.json(err));
});

// Изменение 
router.put("/update/serviceNote/:id", (req, res) => {
  const id = req.params.id;
  ServiceNoteModel.findByIdAndUpdate(
    id,
    {
      creator: req.body.creator,
      addresser: req.body.addresser,
      ViewServiceNote: req.body.ViewServiceNote,
      content: req.body.content,
    },
    { new: true }
  )
    .then((serviceNote) => res.json(serviceNote))
    .catch((err) => res.json(err));
});

// Удаление сотрудника
router.delete("/delete/serviceNote/:id", (req, res) => {
    const id = req.params.id;
    ServiceNoteModel.findByIdAndDelete({ _id: id })
      .then((response) => res.json(response))
      .catch((err) => res.json(err));
  });

module.exports = router;
