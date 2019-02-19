// app.js

const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route');
const mongoose = require('mongoose');

// initialize our express app
const app = express();

// setup mongoose connection
let dev_db_url = 'mongodb://localhost:27017/expressdb';

const mongoDB = process.env.MONGODB_URI ||dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongodB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/products', product);

let port = 1234;

app.listen(port, () => {
		console.log('Server is up and running on port ' + port);
});
