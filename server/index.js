const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const jsonParser = require("body-parser").json();
const cors = require("cors");
const morgan = require("morgan");
const oauthRouter = require("./api/OAuth.js");

const pay = require("./api/pay");
const readCustomer = require("./api/ReadCustomer.js");
const React = require("react");
const { render } = require("@react-email/render");
const { Email } = require("./dist/email.js");
const { SubscribeEmail } = require("./dist/subscribemail.js");
const { SponsorEmail } = require("./dist/sponsoremail.js");

app.use("/oauth", oauthRouter);

// morgan
app.use(morgan("tiny"));
const nodemailer = require("nodemailer");
let smtpTransport = require("nodemailer-smtp-transport");

app.use(jsonParser); // use it globally
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

//server route
app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

const session = require("express-session");

app.use(
  session({
    secret: "your secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // set to true if you're using https
  })
);

app.post("/api/pay", pay.handlePayment);

// Get all customers
app.get("/api/customer", async (req, res) => {
  const accessToken = req.session.accessToken;

  try {
    const customers = await readCustomer.listCustomers();
    res.json(customers);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving customers");
  }
});

// Get a access token to show all customers
async function listCustomers(accessToken) {
  const response = await axios.get(
    "https://connect.squareup.com/v2/customers",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
      },
    }
  );

  return response.data;
}

app.post("/send-email", async (req, res) => {
  const {
    type,
    firstName,
    lastName,
    email,
    phone,
    address,
    address2,
    specialty,
    position,
    company,
    message,
  } = req.body;
  console.log("FN", req.body.firstName);

  try {
    let smtpTransport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // use SSL
      auth: {
        user: "acbcemails@gmail.com",
        pass: "zzxytfohpoyvakyt",
      },
    });

    const emailHtml = render(
      React.createElement(Email, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message,
      })
    );

    const subscribeEmailHtml = render(
      React.createElement(SubscribeEmail, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        address: address,
        specialty: specialty,
        position: position,
        company: company,
        message: message,
      })
    );

    const sponsorEmailHtml = render(
      React.createElement(SponsorEmail, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        address: address,
        address2: address2,
        company: company,
        message: message,
      })
    );

    const options = {
      from: "acbcemails@gmail.com",
      to: "acbcemails@gmail.com",
      subject: "Contact Form Inquiry from ACBC Website",
      html: emailHtml,
    };

    const subscribeOptions = {
      from: "acbcemails@gmail.com",
      to: "acbcemails@gmail.com",
      subject: "Email Subscription Inquiry from ACBC Website",
      html: subscribeEmailHtml,
    };

    const sponsorOptions = {
      from: "acbcemails@gmail.com",
      to: "acbcemails@gmail.com",
      subject: "Sponsorship Inquiry from ACBC Website",
      html: sponsorEmailHtml,
    };

    if (type === "contact") {
      await smtpTransport.sendMail(options);
    } else if (type === "subscribe") {
      await smtpTransport.sendMail(subscribeOptions);
    } else if (type === "sponsor") {
      await smtpTransport.sendMail(sponsorOptions);
    }

    res.json({ message: "Email sent!" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while sending the email." });
  }
});

app.listen(process.env.PORT || 10000, () => {
  console.log(`Server started on port ${process.env.PORT || 10000}`);
});
