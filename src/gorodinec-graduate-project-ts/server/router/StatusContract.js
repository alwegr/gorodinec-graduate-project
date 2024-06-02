const express = require("express");
const router = express.Router();
const StatusContractModal = require("../models/StatusContract");

// Получение 
router.get("/get/statusContract", (req, res) => {
    StatusContractModal.find()
    .then((statusContract) => res.json(statusContract))
    .catch((err) => res.json(err));
});

module.exports = router;
