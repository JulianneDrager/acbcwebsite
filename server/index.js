const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const jsonParser = require("body-parser").json();
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const EMAILPW = require("./api/.env");

require("dotenv").config();
connectDB();

const React = require("react");
const { render } = require("@react-email/render");
const { Email } = require("./dist/email.js");
const { SubscribeEmail } = require("./dist/subscribemail.js");
const { SponsorEmail } = require("./dist/sponsoremail.js");
const { RegisterEmail } = require("./dist/registeremail.js");

app.use(morgan("tiny"));
const nodemailer = require("nodemailer");
let smtpTransport = require("nodemailer-smtp-transport");

app.use(jsonParser); // use it globally
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies

var corsOptions = {
  origin: "https://www.accesscoordinatorbootcamp.com",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(
  cors(corsOptions)
  // cors({
  //   origin: "http://localhost:3000",
  // })
);

//routes
const registerRouter = require("./routes/EventRouter.js");
const extractEmailsRouter = require("./routes/ExtractEmailsRouter.js");
const userRouter = require("./routes/UserRouter.js");
app.use("/api", registerRouter);
app.use("/api", extractEmailsRouter);
app.use("/api", userRouter);

//server route
app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

app.post("/send-email", async (req, res) => {
  const {
    type,
    firstName,
    lastName,
    email,
    phone,
    eventDropDown,
    address,
    practiceAddress,
    address2,
    specialty,
    practice,
    position,
    company,
    shirtSize,
    message,
  } = req.body;
  console.log("FN", req.body.type);

  try {
    let smtpTransport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // use SSL
      auth: {
        user: "acbcemails@gmail.com",
        pass: EMAILPW,
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

    const registerEmailHtml = render(
      React.createElement(RegisterEmail, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        eventDropDown: eventDropDown,
        specialty: specialty,
        practice: practice,
        practiceAddress: practiceAddress,
        company: company,
        shirtSize: shirtSize,
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

    const registerOptions = {
      from: "acbcemails@gmail.com",
      to: "acbcemails@gmail.com",
      subject: "Registrant Form from ACBC Website",
      html: registerEmailHtml,
    };

    if (type === "contact") {
      await smtpTransport.sendMail(options);
    } else if (type === "subscribe") {
      await smtpTransport.sendMail(subscribeOptions);
    } else if (type === "sponsor") {
      await smtpTransport.sendMail(sponsorOptions);
    } else if (type === "register") {
      await smtpTransport.sendMail(registerOptions);
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
