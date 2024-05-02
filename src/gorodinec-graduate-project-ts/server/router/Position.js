const express = require("express");
const router = express.Router();
const Position = require("../models/Position");

// Получение должности
router.get("/get/position", (req, res) => {
    Position.find()
    .then((divisions) => res.json(divisions))
    .catch((err) => res.json(err));
});

module.exports = router;
