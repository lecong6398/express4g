const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/4gViettel', {useNewUrlParser: true, useUnifiedTopology: true},  () => {
    console.log("ket noi thanh cong");
});

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));