const express = require('express')
var path = require("path")
var request = require('request');
const app = express()

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  request.get('http://localhost:3000/accounts', function (error, response, body) {
    let accounts = JSON.parse(body)
    res.render('index', {accounts: accounts})
  }); 
})

app.listen(5000, function () {
  console.log('Example app listening on port 5000!')
})