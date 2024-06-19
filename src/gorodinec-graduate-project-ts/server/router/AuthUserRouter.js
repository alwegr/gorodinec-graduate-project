const express = require("express");
const router = express.Router();
const AuthModal = require("../models/AuthUser");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  const { userName, password } = req.body;
  try {
    const existingUser = await AuthModal.findOne({ userName });
    if (existingUser) {
      console.error("Пользователь уже существует");
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt); 

    const newUser = new AuthModal({
      userName,
      password: hash,
      role: "employees",
    });
    await newUser.save();

    res.json({
      message: "Регистрация прошла успешно",
    });
  } catch (error) {
    console.error(error);
  }
});

router.post("/login", async (req, res) => {
  const { userName, password } = req.body;

  try {
    if (userName === "admin" && password === "admin") {
      return res.json({ userName: "admin", role: "admin" });
    }

    const user = await AuthModal.findOne({ userName });
    if (!user) {
      console.error("Неверное имя пользователя или пароль");
    }

    const hash = bcrypt.compareSync(password, user.password);
    if (!hash) {
      console.error("Неверное имя пользователя или пароль");
    }

    if (user.role !== "employees") {
      console.error("Доступ запрещен");
    }

    res.json({ userName: user.userName, role: user.role });
  } catch (error) {
    console.error("Ошибка сервера");
  }
});

module.exports = router;
