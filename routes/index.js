var express = require('express');
var router = express.Router();

var mysql= require('mysql');
var connect= mysql.createConnection({
  host: "localhost",
  username:"root",
  database: 'bukatoko',
  password: ""
});

router.get('/register', function(req, res){
  res.render('register');
})

router.get('/home', function(req, res){
  res.render('home');
})

router.post('/register', function(req, res){
  var name = req.body.name;
  var phoneNumber = req.body.phoneNumber;
  var email = req.body.email;
  var password = req.body.password;

  var query = "INSERT INTO user(name, phoneNumber, email, password) VALUES(?, ?,?,?)";

  var param = [name, phoneNumber, email, password];

  connect.query(query, param, function(error, result){
    if(error){
      return res.json({msg: "error"});
    }else{
      return res.json({msg: "success"});
    }
  });
})

// function login (e)  {
//   e.preventDefault();
  
//   //WEB SQL
//   //localStorage
//   //webstorage

//   let username = $('#username').val();

//   localStorage.setItem('session', username);

//   window.location.href = "/home";
// }

// $(function() { //fungsi yang akan di execute ketika halaman selesai di 'render'
//   //add 'submit; event on 'f_login'
//   let username = localStorage.getItem('session');
//   if (username) window.location.replace('/home');

//   $('#f_login').submit(login);
// });


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
module.exports = router;
