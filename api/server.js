/* eslint-disable linebreak-style */

const nodemailer = require('nodemailer');

// server used to send send emails

export default function handler(request, response) {
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

  // eslint-disable-next-line consistent-return
  contactEmail.verify((error) => {
    if (error) {
      return response.status(401).json({ text: 'Email is not authenticated' });
    }

    // Set CORS headers in the response
    response.setHeader('Access-Control-Allow-Origin', 'https://kevinwilliamsportfolio.com/'); // Replace * with specific origins
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    const name = `${request.body.firstName} ${request.body.lastName}`;
    const { email } = request.body;
    const { message } = request.body;
    const { phone } = request.body;
    const mail = {
      from: name,
      to: 'kevinwilliams011098@gmail.com',
      subject: 'Contact Form Submission - Portfolio',
      html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
    };
      // eslint-disable-next-line no-shadow
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        return response.json({ code: 404, status: error, myMessage: 'Email did not go through' });
      }
      return response.json({ code: 200, status: 'Message Sent' });
    });
  });
}

export function healthCheck(request, response) {
  return response.json({ code: 200, status: 'Health is good' });
}
