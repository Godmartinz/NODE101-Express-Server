// import files and packages up here
const morgan= require('morgan');
const topSpot= require('./data.json');
// create your express server below
const express= require('express');
const app=express();
// add your routes and middleware below
app.use(morgan('dev'));
app.use(express.static('public'));
app.get('/', function(req, res){
    res.status(200).send("Working..");
});
app.get('/data', function(req, res){
    res.status(200).send(topSpot);
});
// finally export the express application
module.exports = app;
