var express = require('express');
var mongo = require('mongodb');
var client = mongo.MongoClient;
var app = express();

client.connect('mongodb://localhost:27017/fastfood', function(error, db){
  if (error) {console.log("Coundn't connect to database")}
  app.get('/', function(req, res){
    var students = db.collection('fastfood').find().toArray(function(error, company){
      res.send(company);
    })
  })

  app.get('/fastfood/new', function(req, res){
    db.collection('fastfood').insert({name: 'Potbelly', employees:'3500'}, function(error){
      if (error) {res.send(error)}
      else {res.send("Potbelly is added")}
    })
  })

  app.get('/fastfood/update', function(req, res){
    db.collection('fastfood').update({name: 'Potbelly'}, {$set: {employees: 40000}}, function(error){
      if (error) {res.send(error)}
      else {res.send("Potbelly has been updated")}
    })
  })
});

app.listen(3000);
