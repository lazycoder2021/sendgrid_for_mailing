const express = require('express'); 
const app = express(); 
require('dotenv').config(); 

app.get('/', function (req, res) {
    res.send('hello world')
})

const sendEmail = require('./controllers/sendEmail');

app.get('/send', sendEmail)

app.listen(process.env.PORT, function () {
    console.log(`server up and running @ ${process.env.PORT}`)
})