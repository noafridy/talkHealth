var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')  //שלב2

var talkHealthRoutes = require('./routes/talkHealthRoutes');   //changed the Routes name   שלב1

var app = express();
 //collections => יש לשים לב שאני משנה לדאטה הנכון
mongoose.connect('mongodb://localhost:27017/talkHealth', {useNewUrlParser: true}) //שלב2 // חיבור לדאטהבייס //collections

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/TalkHealth', talkHealthRoutes);   //changed to Routes name  שלב1


module.exports = app;
