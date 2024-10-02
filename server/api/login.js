const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

// Login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Check if the username and password are provided
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  // TODO: Replace with your own logic to fetch user from the database
  const user = {
    id: 1,
    username: "john",
    password: "$2b$10$3W9Q9Y3G3Z2Q9Y3G3Z2Q9Y3G3Z2Q9Y3G3Z2Q9Y3G3Z2Q9Y3G3Z2Q9Y3G", // Hashed password
  };

  // Compare the provided password with the hashed password
  bcrypt.compare(password, user.password, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" });
    }

    if (!result) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user.id, username: user.username },
      "secretKey"
    );

    // Return the token to the client
    res.json({ token });
  });
});
