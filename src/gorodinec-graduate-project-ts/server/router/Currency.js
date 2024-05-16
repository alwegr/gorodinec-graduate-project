const express = require("express");
const router = express.Router();
const CurrencyModal = require("../models/Currency");

// Получение 
router.get("/get/currency", (req, res) => {
    CurrencyModal.find()
    .then((currency) => res.json(currency))
    .catch((err) => res.json(err));
});

module.exports = router;
