"use strict";
//day 3-1
console.log("x");

var express = require('express');

var mongo = require('mongodb');

var uuid = require('uuid/v4');

var mProducts = require('./modules/products');

var mOrders = require('./modules/orders');

var app = express();

//products related request
 
//create
app.put('/products', function (req, res) {
  res.send();
}); 

//update
app.post('/products', function (req, res) {
  res.send();
});
//get list
app.get('/products', function (req, res) {
  res.send();
});
//delete
app.delete('/products', function (req, res) {
  res.send();
});
 
//orders
app.put('/orders', function (req, res) {
  res.send();
}); 

app.post('/orders', function (req, res) {
  res.send();
});

app.get('/orders', function (req, res) {
  res.send();
});

app.delete('/orders', function (req, res) {
  res.send();
});


//app start listen

app.listen(3000, function(){
    console.log("Mongo rest is listening on 3000 port");
});


