const express = require("express");
const router = express.Router();
const ContractModal = require("../models/Contract");

// Получение
router.get("/get/contract", async (req, res) => {
  try{
    const counterpartiesContract = await ContractModal.find()
    .populate("currency")
    .populate("statusContract")
    .populate("createContract")
    .populate({
      path: "counterparties",
      populate: {path: "nameCounterparties"}
    })
    res.json(counterpartiesContract)
  }catch(error){
    console.error(error, "ошибка")
  }
});
router.get("/get/contract/:id", async (req, res) => {
  try{
    const counterpartiesContract = await ContractModal.find(req.params.id)
    .populate("currency")
    .populate("statusContract")
    .populate("createContract")
    .populate({
      path: "counterparties",
      populate: {path: "nameCounterparties"}
    })
   if(!counterpartiesContract){
    console.res("Связь сотрудника и проекта не найдена");
   }
  }catch(error){
    console.error(error, "Ошибка при получении связи сотрудника и проекта")
  }
});

// Добавление
router.post("/create/contract", (req, res) => {
  const { dateEnd, currency, price, statusContract, subjectAgreement, createContract,counterparties } = req.body;
  const newProject = new ContractModal({
    nameContract: "Договор",
    dateStart: Date.now(),
    dateEnd,
    currency,
    price,
    statusContract,
    subjectAgreement,
    createContract,
    counterparties,
  });
  newProject
    .save()
    .then((contract) => res.json(contract))
    .catch((err) => res.json(err));
});


// Удаление
router.delete("/delete/contract/:id", (req, res) => {
  const id = req.params.id;
  ContractModal.findByIdAndDelete({ _id: id })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

module.exports = router;