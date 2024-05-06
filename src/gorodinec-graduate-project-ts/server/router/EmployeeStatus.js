const express = require("express");
const router = express.Router();
const EmployeeStatus = require("../models/EmployeeStatus");

// Получение должности
router.get("/get/employeeStatus", (req, res) => {
    EmployeeStatus.find()
    .then((employeeStatus) => res.json(employeeStatus))
    .catch((err) => res.json(err));
});

module.exports = router;
