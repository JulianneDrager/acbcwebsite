const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: { type: String, trim: true },
  password: { type: String, trim: true },
  email: { type: String, trim: true },
});

module.exports = mongoose.model("user", UserSchema);
