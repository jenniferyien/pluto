var express = require('express');
var mongo = require('mongodb');
var client = mongo.MongoClient;

var app = express();

client.connect('mongodb://localhost:27017/monsters', function(error, db){
  if (error) {console.log("Coundn't connect to database")}
  app.get('/', function(req, res){
    var vampires = db.collection('vampires').find().toArray(function(error, vampires){
      res.send(vampires)
    })
  })
});


app.listen(3000)
