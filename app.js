var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var bodyParser = require('body-parser');
var mysql = require('mysql');
var con  = require('./database');
const db = require('./database');
var app = express();

var usersRouter = require('./routes/users');
const { dirname } = require('path');
var userRouter = require('./routes/users');
app.use('/users', userRouter);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/contact_us', function(req, res, next) {
  
  // store all the user input data
  const userDetails=req.body;
 
  // insert user data into users table

  var sql = `INSERT INTO users SET ?`;
  db.query(sql,userDetails,function (err, data) { 
      if (err) throw err;
        console.log("User dat is inserted successfully "); 
  });
 res.redirect('/contact_us');  
}); 


app.get('/about', (req,res)=>{
  res.sendFile(path.join(__dirname + '/views/about.html'))
});
app.get('/products', (req,res)=>{
  res.sendFile(path.join(__dirname + '/views/product.html'))
});
app.get('/contact_us', (req,res)=>{
  res.sendFile(path.join(__dirname + '/views/contact.html'))
});
app.get('/users', function(req, res, next) {

  var sql='SELECT * FROM users';
  db.query(sql, function (err, data, fields) {
  if (err) throw err;
  res.render('list', { title: 'List', userData: data});
  res.render('users');
  });
});
app.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname + '/views/intro.html'))
});

module.exports = app;

app.listen('3000', ()=>{
  console.log('connected');
});
