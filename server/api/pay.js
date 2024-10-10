require("dotenv").config();
require("dotenv").config({ path: "./api/.env" });
const SQUARE_ACCESS_TOKEN = process.env.SQUARE_ACCESS_TOKEN;

const { Client, Environment } = require("square");
const { v4: uuidv4 } = require("uuid");
const nodemailer = require("nodemailer");
const { render } = require("@react-email/render");
const React = require("react");
const ReceiptResponse = require("../dist/receipt").default;

BigInt.prototype.toJSON = function () {
  return this.toString();
};

const client = new Client({
  accessToken: SQUARE_ACCESS_TOKEN,
  environment: Environment.Production,
});

const handlePayment = async (req, res) => {
  console.log("Received request"); // Log when a request is received
  if (req.method === "POST") {
    const { email, fullName, amount } = req.body;

    console.log("email", email); // Log the email

    try {
      const response = await client.paymentsApi.createPayment({
        idempotencyKey: uuidv4(),
        sourceId: req.body.sourceId,
        amountMoney: {
          amount: 1, // Amount in cents
          currency: "USD",
        },
      });
      const { result } = response;
      const sqReceipt = result.payment.receiptUrl;
      console.log("Receipt URL:", sqReceipt);
      const confirmationNumber = result.payment.receiptNumber;

      // Set up SMTP transport
      let smtpTransport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // use SSL
        auth: {
          user: "acbcemails@gmail.com",
          pass: process.env.EMAILPW,
        },
      });

      // Render the email content
      const receiptEmail = render(
        React.createElement(ReceiptResponse, {
          email: email,
          fullName: fullName,
          sqReceipt: sqReceipt,
          payment: amount,
          confirmationNumber: confirmationNumber,
        })
      );

      // Email options
      const receiptOptions = {
        from: "acbcemails@gmail.com",
        to: email,
        subject: "Thank you for registering",
        html: receiptEmail,
      };

      // Send the email
      await smtpTransport.sendMail(receiptOptions);

      res.status(200).json(result);
    } catch (error) {
      console.error("Error creating payment:", error); // Log any errors
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

module.exports = { handlePayment };
