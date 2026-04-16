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


exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();

    res.status(200).json({
      success: true,
      message: "Notes fetched successfully",
      data: notes,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
      data: null,
    });
  }
};


exports.createBulk = async (req, res) => {
  try {
    const { notes } = req.body;

    if (!notes || notes.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Notes array is required",
        data: null,
      });
    }

    const result = await Note.insertMany(notes);

    res.status(201).json({
      success: true,
      message: `${result.length} notes created successfully`,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
      data: null,
    });
  }
};


const mongoose = require("mongoose");

exports.getNoteById = async (req, res) => {
  try {
    const { id } = req.params;

    // ✅ Check valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid ID",
        data: null,
      });
    }

    const note = await Note.findById(id);

    // ✅ Not found
    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Note fetched successfully",
      data: note,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
      data: null,
    });
  }
};




exports.replaceNote = async (req, res) => {
  try {
    const { id } = req.params;

    // ✅ ID validation
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid ID",
        data: null,
      });
    }

    const note = await Note.findByIdAndUpdate(id, req.body, {
      new: true,
      overwrite: true,      // 🔥 FULL replace
      runValidators: true,
    });

    // ✅ Not found
    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Note replaced successfully",
      data: note,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
      data: null,
    });
  }
};