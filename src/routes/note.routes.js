const express = require("express");
const router = express.Router();

const { createNote, getAllNotes, createBulk } = require("../controllers/note.controller");

router.post("/", createNote);
router.get("/", getAllNotes);
router.post("/bulk", createBulk);

module.exports = router;