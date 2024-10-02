const mongoose = require("mongoose");
const json2xls = require("json2xls");
const fs = require("fs");

exports.extractEmails = async (req, res) => {
  try {
    // Get a reference to the collection (Mongoose model)
    const RegisterForm = mongoose.model("registerForm");

    // Query the database to retrieve the emails
    const users = await RegisterForm.find(
      {},
      {
        fullName: { $concat: ["$firstName", " ", "$lastName"] },
        email: 1,
        eventDropDown: 1,
<<<<<<< HEAD
        individualDown: 1,
=======
>>>>>>> 8e742970011bc0413918951b8d73bedd0c88cc96
        phone: 1,
        specialty: 1,
        practice: 1,
        practiceAddress: 1,
        address2: 1,
        shirtSize: 1,
        _id: 0,
      }
    );

    // Convert the results to Excel format
    const xls = json2xls(users.map((user) => user.toObject()));
    console.log("xls", users);

    // Write the data to a file
    fs.writeFileSync("Registrant Emails.xlsx", xls, "binary");

    // Send a success response
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
