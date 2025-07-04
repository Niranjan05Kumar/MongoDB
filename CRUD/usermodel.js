const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mydatabase");

const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  username: String,
  email: String,
});

module.exports = mongoose.model("user", userSchema);
