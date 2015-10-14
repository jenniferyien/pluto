var express = require('express');
var session = require('express-session');
var path = require('path');

var app = express();
app.set('port', 3000);
app.use(express.static(path.join(__dirname, 'public')));
app.listen(app.get('port'));


app.use(session({
  secret: 'password',
  resave: false,
  saveUninitialized: true
}));


var ticketsIssued = 10;
var currentlyServing = 0;

setInterval(function(){
  if (currentlyServing < ticketsIssued) {
      currentlyServing++
  }
}, 2000);

var head_tag = "<head>\
<link rel='stylesheet' href='/style.css'>\
</head>"

app.get('/', function(request, response){
  if (request.session.ticket) {
    if (request.session.ticket <= currentlyServing){
      response.send("\
        <html>\
        "+head_tag+"\
        <body>\
          <h1> You're Up! Here is your coffee, ticket # " +request.session.ticket+"</h1>\
          <img src ='http://wpmedia.o.canada.com/2013/06/sleepypuppy.gif'/>\
        </body>\
        </html>\
      ")
    } else {
      response.send("\
        <html>\
        "+head_tag+"\
        <body>\
          <script>setTimeout(function(){ document.location.reload()}, 2000);</script>\
          <h1>Welcome to Coffee Queue</h1><br>\
          <p> Currently Serving # "+currentlyServing+" of "+ ticketsIssued+"</p>\
          <p> Please wait, your coffee is being prepared, ticket # " +request.session.ticket+". There are "+(request.session.ticket - currentlyServing) +" patrons before you. </p>\
        </body>\
        </html>\
      ")
    }
  } else {
  response.send("\
    <html>\
    "+head_tag+"\
    <body>\
      <script>setTimeout(function(){ document.location.reload()}, 2000);</script>\
      <h1>Welcome to Coffee Queue</h1><br>\
      <p> Currently Serving # "+currentlyServing+" of "+ ticketsIssued+"</p>\
      <a href='/queue-up'><button>Get in Line!</button></a>\
    </body>\
    </html>\
  ")
  }
});

app.get('/queue-up', function(req, res){
  ticketsIssued++
  req.session.ticket = ticketsIssued
  res.redirect('/')
});
