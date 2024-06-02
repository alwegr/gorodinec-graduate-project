const express = require("express");
const router = express.Router();
const ContractModal = require("../models/Contract");

// Получение
router.get("/get/contract", (req, res) => {
    ContractModal.find()
    .populate("currency")
    .populate("statusContract")
    .populate("createContract")
    .then((contract) => res.json(contract))
    .catch((err) => res.json(err));
});
router.get("/get/contract/:id", (req, res) => {
  const id = req.params.id;
  ContractModal.findById({ _id: id })
    .populate("currency")
    .populate("statusContract")
    .populate("createContract")
    .then((post) => res.json(post))
    .catch((err) => console.log(err));
});

// Добавление
router.post("/create/contract", (req, res) => {
  const { dateEnd, currency, price, statusContract, subjectAgreement, createContract } = req.body;
  const newProject = new ContractModal({
    nameContract: "Договор",
    dateStart: Date.now(),
    dateEnd,
    currency,
    price,
    statusContract,
    subjectAgreement,
    createContract,
  });
  newProject
    .save()
    .then((contract) => res.json(contract))
    .catch((err) => res.json(err));
});


// Удаление
router.delete("/delete/serviceNote/:id", (req, res) => {
  const id = req.params.id;
  ContractModal.findByIdAndDelete({ _id: id })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

module.exports = router;