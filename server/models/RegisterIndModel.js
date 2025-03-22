const mongoose = require("mongoose");

const RegisterFormIndSchema = new mongoose.Schema({
  firstNameInd: { type: String, trim: true },
  lastNameInd: { type: String, trim: true },
  emailInd: { type: String, trim: true },
  phoneInd: { type: String, trim: true },

  eventDropDownInd: { type: String, trim: true },
  individualDown: { type: String, trim: true },
  specialtyInd: { type: String, trim: true },
  practiceInd: { type: String, trim: true },

  practiceAddressInd: { type: String, trim: true },
  companyInd: { type: String, trim: true },
  shirtSizeInd: { type: String, trim: true },
  type: { type: String, trim: true },
});

module.exports = mongoose.model("registerIndForm", RegisterFormIndSchema);
