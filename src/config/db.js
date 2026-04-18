const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://vishv_vp:Vishv0210@cluster0.ikmsfsj.mongodb.net/notesapp?retryWrites=true&w=majority");
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;