const mongoose = require("mongoose");
const config = require("config");

const db = config.get("MongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log("Connected...");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Connection failed" });
  }
};

module.exports = connectDB;
