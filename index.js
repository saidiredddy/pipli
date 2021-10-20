require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express()
const server = require('http').createServer(app);
const port = process.env.PORT || 3000;
const filerouter = require('./routes/exel.routes');
app.use(express.static(__dirname + "/uploads"))
mongoose.connect('mongodb://localhost:27017/pipli')

mongoose.connection.once('open',() => {
    console.log('connected with databse')
})

app.use('/file', filerouter)
server.listen(port, () => {
    console.log(`server is running on port ${port}`)
})