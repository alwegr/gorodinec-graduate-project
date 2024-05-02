const express = require("express");
const router = express.Router();
const Divisions = require("../models/Divisions");

// Получение должности
router.get("/get/divisions", (req, res) => {
    Divisions.find()
    .then((positions) => res.json(positions))
    .catch((err) => res.json(err));
});

module.exports = router;
