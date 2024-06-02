const express = require("express");
const CounterpartiesModel = require("../models/Counterparties");
const router = express.Router();

// Получение 
router.get("/get/counterparties", (req, res) => {
    CounterpartiesModel.find()
    .then((counterparties) => res.json(counterparties))
    .catch((err) => res.json(err));
});

router.get("/get/counterparties/:id", (req, res) => {
  const id = req.params.id;
  CounterpartiesModel.findById({ _id: id })
    .then((post) => res.json(post))
    .catch((err) => console.log(err));
});

// Добавление 
router.post("/create/counterparties", (req, res) => {
  const {
    nameCounterparties,
    inn,
    telephone,
    email,
    legalAddress,
    mailingAddress,
    bic,
    numberBic,
  } = req.body;
  const newProject = new CounterpartiesModel({
    nameCounterparties,
    inn,
    telephone,
    email,
    legalAddress,
    mailingAddress,
    bic, 
    numberBic,
  });
  newProject
    .save()
    .then((counterparties) => res.json(counterparties))
    .catch((err) => res.json(err));
});

module.exports = router;