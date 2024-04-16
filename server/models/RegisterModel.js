const mongoose = require("mongoose");

const RegisterFormSchema = new mongoose.Schema({
  firstName: { type: String, trim: true },
  lastName: { type: String, trim: true },
  email: { type: String, trim: true },
  phone: { type: String, trim: true },

  eventDropDown: { type: String, trim: true },
  specialty: { type: String, trim: true },
  practice: { type: String, trim: true },

  practiceAddress: { type: String, trim: true },
  company: { type: String, trim: true },
  shirtSize: { type: String, trim: true },
  type: { type: String, trim: true },
});

module.exports = mongoose.model("registerForm", RegisterFormSchema);
