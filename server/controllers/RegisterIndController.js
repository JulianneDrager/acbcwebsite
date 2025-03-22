const Register = require("../models/RegisterIndModel");

// Get all Registers
exports.getAllRegisters = async (req, res) => {
  try {
    const Registers = await Register.find();
    res.json(Registers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new Register
exports.createRegister = async (req, res) => {
  let newRegister = new Register({
    firstNameInd: req.body.firstNameInd,
    lastNameInd: req.body.lastNameInd,
    emailInd: req.body.emailInd,
    phoneInd: req.body.phoneInd,
    eventDropDownInd: req.body.eventDropDownInd,
    individualDown: req.body.individualDown,
    specialtyInd: req.body.specialtyInd,
    practiceInd: req.body.practiceInd,
    practiceAddressInd: req.body.practiceAddressInd,
    companyInd: req.body.companyInd,
    shirtSizeInd: req.body.shirtSizeInd,
    type: req.body.type,
  });

  try {
    await newRegister.save();
    res.status(201).json(newRegister);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a Register
exports.updateRegister = async (req, res) => {
  try {
    const updatedRegister = await Register.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedRegister);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//get RegisterId
exports.getRegisterById = async (req, res) => {
  // console.log(req.body.details);
  try {
    const getTheRegisterID = await Register.findById({ _id: req.params.id });
    res.json(getTheRegisterID);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// update via filter
exports.updateDetailedSizeRegister = async (req, res) => {
  try {
    const getID = req.params.id;
    const updatedDetails = await Register.findOneAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Post Updated",
      getID,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a Register
exports.deleteRegister = async (req, res) => {
  try {
    await Register.findByIdAndDelete(req.params.id);
    res.json({ message: "Register deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
