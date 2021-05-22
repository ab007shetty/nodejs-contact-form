# NodeJS Contact Form
Contact form build with Bootstrap and Nodemailer.


### Installation
1. Clone the Repo.
```
$ cd nodejs-contact-form

$ npm install && npm start
```

2. Open in browser
```
http://localhost:3000
```


### Gmail SMTP Setup
1. Setup  [app password for gmail](https://support.google.com/accounts/answer/185833?hl=en)
2. Open app.js and change

```javascript
const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
    user: "username@gmail.com", 	// Change it to yours email address
    pass: "password", 				// App Password, (16 character Key)
    }
  })
```

### Configuration
Open app.js

```
const mailOpts = {
    from: '"Contact Form" <username@gmail.com>', //Sender mail
    to: "username@gmail.com",					// Receiver mail
	subject: `${req.body.name}`,
    html: output
  }
```
