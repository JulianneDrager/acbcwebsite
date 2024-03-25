require("dotenv").config();
// console.log(accessToken);

const { Client, Environment } = require("square");

// install uuid for random_string to replace idempotencyKey
const { v4: uuidv4 } = require("uuid");

BigInt.prototype.toJSON = function () {
  return this.toString();
};

const { paymentsApi } = new Client({
  accessToken:
    "EAAAlzLmagOIlzdzcT1uw7MDkkuL02e2bxHbLHDnu-V7B2w5etx5RxdwSjZ2zF5f",

  environment: Environment.Sandbox,
});

const handlePayment = async (req, res) => {
  console.log("Received request"); // Log when a request is received
  if (req.method === "POST") {
    const requestBody = req.body;
    console.log("Request body:", requestBody); // Log the request body
    try {
      const response = await paymentsApi.createPayment({
        idempotencyKey: uuidv4(),
        sourceId: req.body.sourceId,
        amountMoney: {
          amount: 100, // Removed duplicate key
          currency: "USD",
        },
      });
      console.log("Payment response:", response); // Log the response from createPayment
      const { result } = response;
      console.log("Payment result:", result); // Log the result from createPayment
      res.status(200).json(result);
    } catch (error) {
      console.error("Error creating payment:", error); // Log any errors
      res.status(500).json(requestBody);
    }
  } else {
    console.log("Received non-POST request"); // Log if a non-POST request is received
  }
};

exports.handlePayment = handlePayment;
