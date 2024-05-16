const express = require("express");
const router = express.Router();
const ViewServiceNote = require("../models/ViewServiceNote");

router.get("/get/viewServiceNote", (req, res) => {
    ViewServiceNote.find()
    .then((viewServiceNote) => res.json(viewServiceNote))
    .catch((err) => res.json(err));
});

module.exports = router;
