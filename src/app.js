const express = require("express");
const app = express();

const noteRoutes = require("./routes/note.routes");

// Middleware
app.use(express.json());

// Routes
app.use("/api/notes", noteRoutes);

module.exports = app;