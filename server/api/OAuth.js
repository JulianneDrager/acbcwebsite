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

  const redirectUri = "https://acbcwebsite.onrender.com/oauth/callback";

  const authUrl = `https://connect.squareup.com/oauth2/authorize?client_id=${clientIDENV}&CUSTOMERS_WRITE+CUSTOMERS_READ&session=false&state=NY&redirect_uri=${redirectUri}`;
  console.log(authUrl);
  res.redirect(authUrl);
});

// Callback route for Square to redirect to
router.get("/callback", async (req, res) => {
  console.log("Callback route hit");

  const { code } = req.query;

  // Log the entire query parameters and the authorization code
  console.log("Query parameters: ", req.query);
  console.log("Authorization code: ", code);

  try {
    const response = await axios.post(
      "https://connect.squareup.com/oauth2/token",
      qs.stringify({
        client_id: clientIDENV,
        client_secret: clientSecretENV,
        code,
        grant_type: "authorization_code",
        redirect_uri: "https://acbcwebsite.onrender.com/oauth/callback", // Replace with your actual redirect URI
      })
    );

    const { access_token } = response.data;

    // console.log("Access token: ", access_token);

    // After obtaining the access token...
    req.session.accessToken = access_token;

    // Send a response back to the client
    res.json({ access_token });
  } catch (error) {
    // console.error("Error when making request to Square: ", error.response.data.errors);
    console.error(
      "Error when exchanging authorization code for access token: ",
      error.response.data.errors
    );

    // Send an error response back to the client
    res
      .status(500)
      .json({ error: "An error occurred when making a request to Square" });
  }
});

module.exports = router;
