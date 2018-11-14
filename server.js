// server.js

var router1      =require('/home/anuradhayakapoor/library/scotch/starter-node-angular-master/app/routes.js')
var express        = require('express');
var app            = express();
//app.use(app.router);
//router1.initialize(app);
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var mongoose=require('mongoose');
var db = require('./config/db');
var port = process.env.PORT || 8080; 
mongoose.connect(db.url); 
app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(express.static(__dirname + '/public')); 
app.listen(port);               
console.log('Magic happens on port ' + port);
var app=require('/home/anuradhayakapoor/library/scotch/starter-node-angular-master/app/routes.js'); // configure our routes
exports = module.exports = app;                         



                      

