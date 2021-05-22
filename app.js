// Import Package
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

// Set Package
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

// Server Start Notification
app.listen(3000, () => console.log("Server Started on port 3000..."));

// Get Index Page Request
app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname });
});

// POST route from contact form
app.post('/contact', (req, res) => {
	
	// Email Template
    const output = `
        <p>You have a message</p>
        <h3>Contact Details</h3>
        <p>Name: ${req.body.name}</p>
        <p>Email: ${req.body.email}</p>
        <h3>Message</h3>
        <p>${req.body.message}</p>
    `;

  // Instantiate the SMTP server
  const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
    user: "username@gmail.com", // Sender email username
    pass: "password", // Sender email password, not the normal one.
    }
  })

  // Specify what the email will look like
  const mailOpts = {
    from: '"Contact Form" <username@gmail.com>', //Sender mail
    to: "username@gmail.com",					// Recever mail
	subject: `${req.body.name}`,
    html: output
  }

    // Send mail with defined transport object
    smtpTrans.sendMail(mailOpts, (error, info) => {
            if (error) {
                    res.send('<h1 style="color:red" > Something Wrong. </h1>');
            }
            res.send('<h1 style="color: green" >Thank You, Message has been Sent.');
    });
	
})
