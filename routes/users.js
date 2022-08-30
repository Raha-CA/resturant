// const { response } = require('express');
// var express = require('express');
// var router = express.Router();
// var db  = require('../database');


var express = require('express');
const app = require('../app');
var router = express.Router();
var db=require('../database');
router.get('/form', function(req, res, next) { 
res.render('users'); 
});
// router.post('/create', function(req, res, next) {
  
//   // store all the user input data
//   const userDetails=req.body;
 
//   // insert user data into users table

//   var sql = `INSERT INTO users SET ?`;
//   db.query(sql,userDetails,function (err, data) { 
//       if (err) throw err;
//         console.log("User dat is inserted successfully "); 
//   });
//  res.redirect('/users/form');  // redirect to user form page after inserting the data
// }); 
// module.exports = router;


/* GET users listing. */
// router.get('/users', function(req, res, next) {

//   var sql='SELECT * FROM users';
//   db.query(sql, function (err, data, fields) {
//   if (err) throw err;
//   res.render('users', { title: 'List', userData: data});
//   res.render('users');
//   });
//   con.query('SELECT * FROM users',function(err,rows){
//     if(err){
//      req.flash('error', err); 
//      res.render('list',{page_title:"Users - Node.js",data:''});   
//     }else{  
//       res.render('list',{page_title:"Users - Node.js",data:rows});
//     }                  
//     });
//   res.send('respond with a resource');
// });

// router.post("/action",function(req,res,next){
//   var action = req.body.action;
//   if(action == 'fetch')
//   {
//     var query = "SELECT * FROM users";
//     db.query(query,function(err,data){
//       response.json({
//         data:data
//       });
//     })
//   }
// })

// router.post('/contact_us', function(req, res, next) {
  // var user = req.body.user;
  // var email = req.body.email;
  // var gender = req.body.gender;
  // var comment = req.body.comment;
  // (${user}, ${email}, ${gender}, ${comment}) VALUES ?,?,?,?

  // const detail = req.body;

  // var sql = `INSERT INTO users SET ?`;
  // db.query(sql,detail, function(err, result) {
  //   if (err) throw err;
  //   console.log('record inserted');
    // req.flash('success', 'Data added successfully!');
//     res.redirect('/users/list');
//   });
// });

module.exports = router;
