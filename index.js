const express = require('express');
const mongoose = require('mongoose');
const homeRoute = require('./routes/home');
const servicesRoute = require('./routes/services');
const contactRoute = require('./routes/contact');
const workRoute = require('./routes/work');

const app = express();

app.use(express.json());

//Routes

app.use('/', homeRoute);
app.use('/services', servicesRoute);
app.use('/contact', contactRoute);
app.use('/work', workRoute);

// Public
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

// mongoose.connect("mongodb://localhost::27017/playground")
//   .then(() => console.log("Connected to DB.."))
//   .catch(err => console.error("Error", err.message));

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Listening on port ${port}`));