const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require('cors');
const app = express();

const PORT =8000;
let pp = PORT;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());



app.get('/send-email', (req, res) => {
    res.send({ message: 'hiiiiiiii', port: PORT });
  });
  


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "surendrawankhade1973@gmail.com",
      pass: "cyjepyhwchonjuii",
    },
  });
  
  // Define an endpoint to send emails
  app.post('/send-email', (req, res) => {
    const { from, to, subject, text } = req.body;
  
    const mailOptions = {
      from,
      to,
      subject,
      text,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Email sending failed' });
      } else {
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Email sent successfully' });
      }
    });
  });












app.listen(PORT, () =>{
    console.log('server is listing to ',`${PORT}`)
})