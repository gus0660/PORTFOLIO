const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Servir les fichiers statiques depuis le répertoire "public"
app.use(express.static(path.join(__dirname, "public")));

app.post("/send-email", (req, res) => {
  console.log("Request received: ", req.body);
  const { name, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Contact form submission from ${name}`,
    text: `Nom: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
      return res.status(500).send(error.toString());
    }
    console.log("Email sent: ", info.response);
    res.status(200).send("Email sent: " + info.response);
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
