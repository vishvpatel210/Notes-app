const Note = require("../models/note.model");


exports.createNote = async (req, res) => {
  try {
    const note = await Note.create(req.body);

    res.status(201).json({
      success: true,
      message: "Note created successfully",
      data: note,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
      data: null,
    });
  }
};