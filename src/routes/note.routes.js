const express = require("express");
const router = express.Router();

const { createNote, getAllNotes, createBulk, getNoteById, replaceNote } = require("../controllers/note.controller");

router.post("/", createNote);
router.get("/", getAllNotes);
router.post("/bulk", createBulk);
router.get("/:id", getNoteById);
router.put("/:id", replaceNote);

module.exports = router;