const express = require("express");
const EmploymentContractModel = require("../models/EmploymentContract");
const router = express.Router();

// Получение
router.get("/get/employmentContract", (req, res) => {
  EmploymentContractModel.find()
    .populate("employees")
    .then((employmentContract) => res.json(employmentContract))
    .catch((err) => res.json(err));
});

router.get("/get/employmentContract/:id", (req, res) => {
  const id = req.params.id;
  EmploymentContractModel.findById({ _id: id })
    .populate("employees")
    .then((post) => res.json(post))
    .catch((err) => console.log(err));
});

// Добавление
router.post("/create/employmentContract", (req, res) => {
  const {
    seriesPassport,
    numberPassport,
    issued,
    dateOfIssue,
    departmentCode,
    salary,
  } = req.body;
  const newProject = new EmploymentContractModel({
    nameEmploymentContract: 'Трудовой договор',
    dateEmploymentContract: Date.now(),
    seriesPassport,
    numberPassport,
    issued,
    dateOfIssue,
    departmentCode,
    salary,
  });
  newProject
    .save()
    .then((employmentContract) => res.json(employmentContract))
    .catch((err) => res.json(err));
});

// Изменение
router.put("/update/employmentContract/:id", (req, res) => {
  const id = req.params.id;
  EmploymentContractModel.findByIdAndUpdate(
    id,
    {
      lastName: req.body.lastName,
      firstName: req.body.firstName,
      middleName: req.body.middleName,
      gender: req.body.gender,
      personnelNumber: req.body.personnelNumber,
      position: req.body.position,
      divisions: req.body.divisions,
      employeeStatus: req.body.employeeStatus,
    },
    { new: true }
  )
    .then((employmentContract) => res.json(employmentContract))
    .catch((err) => res.json(err));
});

// Удаление
router.delete("/delete/employmentContract/:id", (req, res) => {
  const id = req.params.id;
  EmploymentContractModel.findByIdAndDelete({ _id: id })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

module.exports = router;
