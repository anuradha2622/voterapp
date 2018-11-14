const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const product = require('/home/anuradhayakapoor/library/scotch/starter-node-angular-master/app/models/route2.js'); // Imports routes for the products
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
//let dev_db_url = 'mongodb://someuser:abcd1234@ds123619.mlab.com:23619/productstutorial';
let dev_db_url = 'mongodb://localhost:27017/doche'
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

let port = 8089;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});