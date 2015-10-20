var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongo = require('mongodb');
var client = mongo.MongoClient;

var app = express();
app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());
app.set('port', 3000);

app.use('/', express.static(path.join(__dirname, 'public')));

client.connect('mongodb://localhost:27017/monsters', function(error, db){
  if (error) {console.log("Coundn't connect to database")}
  app.get('/vampires', function(req, res){
    db.collection('vampires').find().toArray(function(error, vampire){
      res.send(vampire);
    })
  }); //get vampire list for index /show

  app.post('/vampire/create', function(req, res){
    db.collection('vampires').insert(req.body, function(error){
      if (error) {res.send(error)}
    })
  }); //new and create

  app.post('/vampire/update', function(req, res){
     db.collection('vampires').update({name: req.body.name}, {$set: req.body.vamp}, function(error){
       if (error) {res.send(error)}
     })
  });

  app.delete('/vampire/delete', function(req, res){
    db.collection('vampires').remove(req.body, function(error){
      if (error) {res.send(error)}
    })
  }); //delete

});

app.listen(app.get('port'), function(){
  console.log('App listening on http://localhost:%s', app.get('port'));
});
