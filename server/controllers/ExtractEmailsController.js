const mongoose = require("mongoose");
const json2xls = require("json2xls");
const fs = require("fs");

exports.extractEmails = async (req, res) => {
  try {
    // Get a reference to the collection (Mongoose model)
    const RegisterForm = mongoose.model("registerForm");

    // Query the database to retrieve the emails
    const users = await RegisterForm.find({}, { email: 1, _id: 0 });

    // Convert the results to Excel format
    const xls = json2xls(users.map((user) => user.toObject()));
    console.log("xls", users);

    // Write the data to a file
    fs.writeFileSync("emails.xlsx", xls, "binary");

    // Send a success response
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all Registers
// exports.getAllRegisters = async (req, res) => {
//     try {
//       const Registers = await Register.find();
//       res.json(Registers);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   };
