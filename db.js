const mongoose = require('mongoose');
require('dotenv').config();

//define the mongoDB connection URL
//const mongoURL = process.env.MONGODB_URL_LOCAL;
const mongoURL = process.env.MONGODB_URL;
//upper part lo mydatabse anedi manam replace kuda cheyocchu

//set up mongoDB connectionn
// mongoose.connect(mongoURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase');


//get the default connection 
//mongoose maintains a default connection obj representing the mongoDB connection.
const db = mongoose.connection;

// node --trace-warnings app.js


//event listeners for database connection
db.on('connected', () =>{
    console.log('connected to mongoDB server');
});

db.on('error', ()=>{
    console.log('mongoDB connection is error');
});

db.on('disconnected', ()=>{
    console.log('mongoDB disconnected');
});

//export the database conct
module.exports = db;
