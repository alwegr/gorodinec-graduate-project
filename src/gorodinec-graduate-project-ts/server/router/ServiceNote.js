const express = require("express");
const router = express.Router();
const ServiceNote = require("../models/ServiceNote");

// Получение должности
router.get("/get/serviceNote", (req, res) => {
    ServiceNote.find()
    .then((serviceNote) => res.json(serviceNote))
    .catch((err) => res.json(err));
});

module.exports = router;
