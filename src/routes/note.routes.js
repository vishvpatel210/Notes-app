const express = require("express");
const router = express.Router();

const { createNote, getAllNotes, createBulk, getNoteById, replaceNote, updateNote, deleteNote, deleteBulk } = require("../controllers/note.controller");

router.post("/", createNote);
router.get("/", getAllNotes);
router.post("/bulk", createBulk);
router.get("/:id", getNoteById);
router.put("/:id", replaceNote);
router.patch("/:id", updateNote);
router.delete("/bulk", deleteBulk);
router.delete("/:id", deleteNote);

module.exports = router;