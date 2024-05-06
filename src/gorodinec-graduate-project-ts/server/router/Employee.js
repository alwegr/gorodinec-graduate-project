const express = require("express");
const EmployeesModel = require("../models/Employee");
const router = express.Router();

// Получение сотрудников
router.get("/get/employees", (req, res) => {
  EmployeesModel.find()
    .populate("position")
    .populate("divisions")
    .populate("employeeStatus")
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

router.get("/get/employees/:id", (req, res) => {
  const id = req.params.id;
  EmployeesModel.findById({ _id: id })
    .populate("position")
    .populate("divisions")
    .populate("employeeStatus")
    .then((post) => res.json(post))
    .catch((err) => console.log(err));
});

// Добавление сотрудника
router.post("/create/employees", (req, res) => {
  const {
    lastName,
    firstName,
    middleName,
    gender,
    personnelNumber,
    position,
    divisions,
    employeeStatus,
  } = req.body;
  const newProject = new EmployeesModel({
    lastName,
    firstName,
    middleName,
    gender,
    personnelNumber,
    position,
    divisions,
    employeeStatus,
  });
  newProject
    .save()
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

// Изменение сотрудников
router.put("/update/employees/:id", (req, res) => {
  const id = req.params.id;
  EmployeesModel.findByIdAndUpdate(
    id,
    {
      lastName: req.body.lastName,
      firstName: req.body.firstName,
      middleName: req.body.middleName,
      position: req.body.position,
      isActive: req.body.isActive,
    },
    { new: true }
  )
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

// Удаление сотрудника
router.delete("/delete/employees/:id", (req, res) => {
  const id = req.params.id;
  EmployeesModel.findByIdAndDelete({ _id: id })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

module.exports = router;
