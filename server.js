const express = require('express');
const smsRoute = require('./routes/sms');

const app = express();
const port = process.env.port || 3000;

app.get('/', (req, res) => {

    res.send("<h1>Running express server!</h1>");
});

app.listen(port, ()=>{
    console.log (`Server running at port: ${port}`);
})

app.use ('/sms', smsRoute);
