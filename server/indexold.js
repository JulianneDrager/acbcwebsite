// RESTART----------------------------------------------------------------------

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const cors = require("cors");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");
const pay = require("./api/pay");
// const customer = require("./api/customer");
const readCustomer = require("./api/ReadCustomer");

// upload
const upload = multer();

// morgan
app.use(morgan("tiny"));
const nodemailer = require("nodemailer");
let smtpTransport = require("nodemailer-smtp-transport");

app.use(jsonParser); // use it globally
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies
app.use(cors());

// app.use(express.static(path.join(__dirname, "./client/build")));

//server route
app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

app.post("/api/pay", pay.handlePayment);
// app.post("api/customer", customer.handleCustomer);
app.get("/api/customer", readCustomer.listCustomers);
// smtpTransport = nodemailer.createTransport(
//   smtpTransport({
//     host: "smtp-mail.outlook.com",
//     port: 465,
//     secure: false,
//     auth: {
//       user: "specialtymeds@biomazzecoordination.com",
//       pass: "Newpass23!",
//     },
//   })
// );

smtpTransport = nodemailer.createTransport(
  smtpTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "biomazzemails@gmail.com",
      pass: "hqbbztgpvcqovfpf",
    },
  })
);

// app.post("/send-email", upload.single("file"), (req, res) => {
//   console.log(req.file);
//   const {
//     firstnameprop,
//     lastnameprop,
//     phoneprop,
//     emailprop,
//     positionprop,
//     questionprop,
//   } = req.body;
//   const file = req.file;

//   //prepare email content
//   const mailOptions = {
//     from: "biomazzemails@gmail.com",
//     to: "biomazzemails@gmail.com",
//     subject: "Positon Inquiry from Your BioMazze Website",
//     html: `
//     <td class="esd-stripe" align="center" bgcolor="#5A6F8E" style="background-color: #5a6f8e;">
//     <table class="es-content-body" style="background-color: #ffffff;" width="560" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
//         <tbody>
//             <tr>
//                 <td class="esd-structure es-p30t es-p30b es-p20r es-p20l" align="left">
//                     <table width="100%" cellspacing="0" cellpadding="0">
//                         <tbody>
//                             <tr>
//                                 <td class="es-m-p0r es-m-p20b esd-container-frame" width="520" valign="top" align="center">
//                                     <table width="100%" cellspacing="0" cellpadding="2">
//                                         <tbody>
//                                             <tr>
//                                                 <td align="center" class="esd-block-text es-p10t es-p10b es-p40r es-p40l es-m-p0r es-m-p0l" bgcolor="#07181b">
//                                                     <h1 style="color: #e1e2e4;">Hire&nbsp;<strong>Inquiry</strong></h1>
//                                                 </td>
//                                             </tr>
//                                             <tr>
//                                                 <td align="left" class="esd-block-text es-p20t es-p10b es-p25r es-p20l">
//                                                     <p><br></p>
//                                                     <h3 style="color: #3a4b60; font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;"><strong>${firstnameprop}</strong> is interested in working for you:<br><br>Desired Role: ${positionprop}</h3>
//                                                     <p style="font-size: 19px; color: #3a4b60; font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;">First Name: ${firstnameprop}<br>Last Name: ${lastnameprop}<br>Phone Number: ${phoneprop}&nbsp;&nbsp;<br>Email Address: ${emailprop}<br><br>Why hire
//                                                     ${firstnameprop}?<br>${questionprop}</p>
//                                                     <p style="font-size: 19px; color: #3a4b60;"><br></p>
//                                                 </td>
//                                             </tr>
//                                         </tbody>
//                                     </table>
//                                 </td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </td>
//             </tr>
//             <tr>
//                 <td class="esd-structure es-p30t es-p10b es-p20r es-p20l" align="left" bgcolor="#222b37" style="background-color: #222b37;">
//                     <table cellpadding="0" cellspacing="0" width="100%">
//                         <tbody>
//                             <tr>
//                                 <td width="520" class="esd-container-frame" align="center" valign="top">
//                                     <table cellpadding="0" cellspacing="0" width="100%">
//                                         <tbody>
//                                             <tr>
//                                                 <td align="center" class="esd-block-text">
//                                                     <h3 style="color: #ffffff; font-size: 32px; text-align: center;">www.BiologicsBMC.com</h3>
//                                                 </td>
//                                             </tr>
//                                         </tbody>
//                                     </table>
//                                 </td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </td>
//             </tr>
//         </tbody>
//     </table>
// </td>
//           `,
//     attachments: file
//       ? [{ filename: file.originalname, content: file.buffer }]
//       : [],
//   };

//   // send email
//   smtpTransport.sendMail(mailOptions, (err, info) => {
//     if (err) {
//       res.status(500).send({
//         success: false,
//         message: "Something went wrong. Try again later",
//       });
//     } else {
//       res.send({
//         success: true,
//         message: "Thanks for contacting us. We will get back to you shortly",
//       });
//     }
//   });
// });

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
