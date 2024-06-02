const express = require("express");
const router = express.Router();
const CounterpartiesAgreementModel = require("../models/CounterpartiesAgreement");


router.get("/get/counterpartiesAgreement", async (req, res) => {
  try {
    const CounterpartiesAgreement = await CounterpartiesAgreementModel.find()
      .populate("contractId") // Заполнение информации 
      .populate("counterpartiesId");
    res.json(CounterpartiesAgreement);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

router.get("/counterpartiesAgreement/:id", async (req, res) => {
  try {
    const CounterpartiesAgreement = await CounterpartiesAgreementModel.findById(req.params.id)
    .populate("contractId") // Заполнение информации 
    .populate("counterpartiesId");

    if (!CounterpartiesAgreement) {
      return res
        .status(404)
        .json({ message: "Связь сотрудника и проекта не найдена" });
    }
    res.json(CounterpartiesAgreement);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Ошибка при получении связи сотрудника и проекта" });
  }
});


router.post("/addCounterpartiesAgreement", async (req, res) => {
  try {
    const {
        contractId,
        counterpartiesId,
        partiesContract,
    } = req.body;

    // Создаем запись в промежуточной таблице ExecutorTaskModel
    const newCounterpartiesAgreement = new CounterpartiesAgreementModel({
        contractId,
        counterpartiesId,
        partiesContract,
    });

    // Сохраняем запись в промежуточной таблице ExecutorTaskModel
    const savednewCounterpartiesAgreement = await newCounterpartiesAgreement.save();



    // Устанавливаем связь задачи с промежуточной таблицей ExecutorTaskModel
    savednewCounterpartiesAgreement.contractId = newCounterpartiesAgreement._id;
    await savednewCounterpartiesAgreement.save();

    savednewCounterpartiesAgreement.counterpartiesId = newCounterpartiesAgreement._id;
    await savednewCounterpartiesAgreement.save();

    // Сохраняем запись задачи
    await newCounterpartiesAgreement.save();

    res.status(201).json({
      message:
        "Проект успешно добавлен, и сотрудник успешно добавлен к проекту",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

module.exports = router;