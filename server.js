const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const nodemailer = require('nodemailer');
const creds = require('./config/config');
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));


const transport = {
  host: 'smtp.gmail.com', // e.g. smtp.gmail.com
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

const transporter = nodemailer.createTransport(transport)

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.use(express.json()); app.post('/send-email', (req, res, next) => {
  const name = req.body.name
  const email = req.body.email
  const message = req.body.message

  const mail = {
    from: name,
    to: creds.USER,
    subject: email,
    html: message
  }


  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
});
