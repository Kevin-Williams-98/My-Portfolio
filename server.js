const express = require('express');

const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(5000, () => console.log('Server Running'));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to Send');
  }
});

router.post('/contact', (req, res) => {
  const name = `${req.body.firstName} ${req.body.lastName}`;
  const { email } = req.body;
  const { message } = req.body;
  const { phone } = req.body;
  const mail = {
    from: name,
    to: 'kevinwilliams011098@gmail.com',
    subject: 'Contact Form Submission - Portfolio',
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ code: 404, status: error, myMessage: 'this is not working' });
    } else {
      res.json({ code: 200, status: 'Message Sent' });
    }
  });
});

router.get('/health', (req, res) => {
  const serverStatus = {
    status: 'UP',
    message: 'Server is healthy',
  };

  res.json(serverStatus);
});
