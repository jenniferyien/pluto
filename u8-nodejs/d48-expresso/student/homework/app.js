var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.urlencoded({ extend: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set('port', 1337);


var muppetsDB = [
  {id: 1, name: "Kermit", description: "green, frog", age: "37"},
  {id: 2, name: "Fozzy Bear", descritpion: "comedian, bear", age: "40"},
  {id: 3, name: "Swedish Chef", description: "chef, VERY Swedish", age: "unknown"},
  {id: 4, name: "Gonzo", description: "blue", age: "37"}
];


app.get('/', function(req, res){
  console.log("Hey look, I'm expressing myself! Waka Waka!");
});

app.get('/muppets', function(req, res){
  res.send(muppetsDB)
});
// curl http://localhost:1337/muppets

app.post('/muppets/new', function(req, res){
  muppetsDB.push(req.body);
});

// curl -X POST -H "Content-Type: application/json" -d '{"id":"5","name": "pizza", "description":"orange", "age": "90"}' http://localhost:1337/muppets/new

app.post('/muppets/:id', function(req, res){
  muppetsDB[req.params.id -1] = req.body
  // muppetsDB[req.params.id -1].age = req.body
});

// curl -X POST -H "Content-Type: application/json" -d '{"id":"1","name": "liver", "description":"purple", "age": "90"}' http://localhost:1337/muppets/1

app.delete('/muppets/:id', function(req, res){
  muppetsDB.splice(req.params.id -1, 1)
});

// curl -X DELETE http://localhost:1337/muppets/2

app.listen(app.get('port'), function() {
	console.log('App listening on http://localhost:%s', app.get('port'));
});
