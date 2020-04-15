const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connected to db server
connectDB();

app.get("/", (req, res) => {
  res.json({ msg: "Testing App" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
