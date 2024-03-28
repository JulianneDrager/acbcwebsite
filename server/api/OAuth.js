const express = require("express");
const axios = require("axios");
const qs = require("querystring");
require("dotenv").config();

const router = express.Router();

// Redirect user to Square's OAuth page
router.get("/authorize", (req, res) => {
  const clientId = process.env.SQUARE_CLIENT_ID;
  const redirectUri = "https://acbcwebsiteapp.onrender.com/oauth/callback"; // Replace with your redirect URI
  const scopes = ["CUSTOMERS_READ", "CUSTOMERS_WRITE"]; // Replace with the scopes your application needs

  const authUrl = `https://connect.squareup.com/oauth2/authorize?client_id=${clientId}&response_type=code&scope=${scopes.join(
    " "
  )}&redirect_uri=${redirectUri}`;

  res.redirect(authUrl);
});

// Callback route for Square to redirect to
router.get("/callback", async (req, res) => {
  const { code } = req.query;

  const response = await axios.post(
    "https://connect.squareup.com/oauth2/token",
    qs.stringify({
      client_id: process.env.SQUARE_CLIENT_ID,
      client_secret: process.env.SQUARE_CLIENT_SECRET,
      code,
      grant_type: "authorization_code",
    })
  );

  const { access_token } = response.data;

  // Store the access token and use it to authenticate your API calls
  // This is a simple example and does not cover token storage or refresh
  // You'll need to implement token storage and refresh according to your application's needs

  res.send("Access token received");
});

module.exports = router;
