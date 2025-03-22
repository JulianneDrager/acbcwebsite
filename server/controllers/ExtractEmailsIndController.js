const mongoose = require("mongoose");
const json2xls = require("json2xls");
const fs = require("fs");

exports.extractIndEmails = async (req, res) => {
  try {
    // Get a reference to the collection (Mongoose model)
    const RegisterForm = mongoose.model("registerIndForm");

    // Query the database to retrieve the emails
    const users = await RegisterForm.find(
      {},
      {
        fullNameInd: { $concat: ["$firstNameInd", " ", "$lastNameInd"] },
        emailInd: 1,
        eventDropDownInd: 1,
        individualDown: 1,
        phoneInd: 1,
        specialtyInd: 1,
        practiceInd: 1,
        practiceAddressInd: 1,
        address2Ind: 1,
        shirtSizeInd: 1,
        _id: 0,
      }
    );

    // Convert the results to Excel format
    const xls = json2xls(users.map((user) => user.toObject()));
    console.log("xls", users);

    // Write the data to a file
    fs.writeFileSync("Individuals Registrant Emails.xlsx", xls, "binary");

    // Send a success response
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
