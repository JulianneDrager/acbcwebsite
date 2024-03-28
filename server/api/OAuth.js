const express = require("express");
const axios = require("axios");
const qs = require("querystring");
require("dotenv").config({ path: __dirname + "/.env" });

const router = express.Router();

const clientIDENV = process.env.SQUARE_CLIENT_ID;
const clientSecretENV = process.env.SQUARE_CLIENT_SECRET;
// const accessTokenENV = process.env.SQUARE_ACCESS_TOKEN;
// console.log(clientSecretENV); // Should print your Square client ID

// Redirect user to Square's OAuth page
router.get("/authorize", (req, res) => {
  const clientId = clientIDENV;

  const redirectUri = "https://acbcwebsite.onrender.com/oauth/callback"; // Replace with your redirect URI.
  const scopes = ["CUSTOMERS_READ", "CUSTOMERS_WRITE"]; // Replace with the scopes your application needs

  const authUrl = `https://connect.squareup.com/oauth2/authorize?client_id=${clientId}&response_type=code&scope=${scopes.join(
    " "
  )}&redirect_uri=${redirectUri}`;

  res.redirect(authUrl);
});

// Callback route for Square to redirect to
router.get("oauth/callback", async (req, res) => {
  const { code } = req.query;

  // Log the entire query parameters and the authorization code
  console.log("Query parameters: ", req.query);
  console.log("Authorization code: ", code);
});

// Callback route for Square to redirect to
router.get("/callback", async (req, res) => {
  const { code } = req.query;

  const response = await axios.post(
    "https://connect.squareup.com/oauth2/token",
    qs.stringify({
      client_id: clientIDENV,
      client_secret: clientSecretENV,
      code,
      grant_type: "authorization_code",
    })
  );

  const { access_token } = response.data;

  // Store the access token and use it to authenticate your API calls
  // This is a simple example and does not cover token storage or refresh
  // You'll need to implement token storage and refresh according to your application's needs

  console.log("Access token: ", access_token);
});

module.exports = router;
