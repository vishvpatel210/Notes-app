const express = require("express");
const router = express.Router();

const { createNote, getAllNotes, createBulk, getNoteById } = require("../controllers/note.controller");

router.post("/", createNote);
router.get("/", getAllNotes);
router.post("/bulk", createBulk);
router.get("/:id", getNoteById);

module.exports = router;