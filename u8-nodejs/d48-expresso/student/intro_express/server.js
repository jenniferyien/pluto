var express = require('express');
var bodyParser = require('body-parser');
var path = require('path'); //part of node core

var app = express();
var postDB = [{name: 'Sesame', Breed:'Portuguese Water Dog'},{name: 'Tofu', Breed: "Terrier"}];

app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());

app.set(express.static(path.join(__dirname, '/public')));

app.set('port', 3000);

app.get('/posts', function(req, res){ //request, result
  res.send(postDB);
});

app.post('/posts/new', function(req, res){
  postDB.push(req.body)
  console.log(req.body) // second parameter is default
});

app.listen(app.get('port'), function(){
  console.log("App listening on http://localhost:%s", app.get('port'));
});
