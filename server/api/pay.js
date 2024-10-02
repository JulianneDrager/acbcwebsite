require("dotenv").config();
// find access token in .env file
require("dotenv").config({ path: "./api/.env" });
const SQUARE_ACCESS_TOKEN = process.env.SQUARE_ACCESS_TOKEN;

// console.log(SQUARE_ACCESS_TOKEN);

const { Client, Environment } = require("square");

// install uuid for random_string to replace idempotencyKey
const { v4: uuidv4 } = require("uuid");

BigInt.prototype.toJSON = function () {
  return this.toString();
};

const client = new Client({
  accessToken: SQUARE_ACCESS_TOKEN, // Use environment variable for access token
  environment: Environment.Production,
});

const handlePayment = async (req, res) => {
  console.log("Received request"); // Log when a request is received
  if (req.method === "POST") {
    const requestBody = req.body;
    console.log("Request body:", requestBody); // Log the request body
    try {
      const response = await client.paymentsApi.createPayment({
        idempotencyKey: uuidv4(),
        sourceId: req.body.sourceId,
        amountMoney: {
          // Amount in cents
          amount: 2700, // Amount in cents
          currency: "USD",
        },
      });
      // console.log("Payment response:", response); // Log the response from createPayment
      const { result } = response;
      alert("Payment successful!");
      // console.log("Payment result:", result); // Log the result from createPayment
      res.status(200).json(result);
    } catch (error) {
      // console.error("Error creating payment:", error); // Log any errors
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

module.exports = { handlePayment };
