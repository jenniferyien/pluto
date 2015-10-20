// Here we require Node.js libraries using CommonJS
var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var loremIpsum = require('lorem-ipsum')

// When we receive a connection over Socket.io
io.on('connection', function(socket){
  // Ask the user to identify themselves
  socket.emit('identify')
  // When the user asks to open the specified book source
  socket.on('open', function(book_url) {
    // pageFlipDelay: used to throttle page turns & disrupt content theives
    var pageFlipDelay;
    // book: the content of the book. This needs to be modified so that it comes
    //       from an Ajax request
    var book = {
      content: [
        loremIpsum({count: 3, units: 'paragraphs', format: 'html'}),
        loremIpsum({count: 3, units: 'paragraphs', format: 'html'}),
        loremIpsum({count: 3, units: 'paragraphs', format: 'html'}),
        loremIpsum({count: 3, units: 'paragraphs', format: 'html'}),
        loremIpsum({count: 3, units: 'paragraphs', format: 'html'})
      ],
      page: 1 // The current page being viewed.
    };

    // update: Asks client to update the page, with new content
    function update() {
      // This conditional throttles the update event to prevent content theives
      if (pageFlipDelay) {
        return false;
      } else {
        socket.emit('update', { left: book.content[book.page-1], right: book.content[book.page] });
        // After each update, prevent additional updates for 2 seconds
        pageFlipDelay = setTimeout(function() { pageFlipDelay = false; }, 2000)
      }
    }

    // Update display with initial content
    update();

    // When the client asks us to turn the page
    socket.on('next page', function(req, res) {
      // Increment the current page and update
      if (!pageFlipDelay && book.page < book.content.length-1) { book.page++; }
      update();
    });

    // When the client asks us to the previous page
    socket.on('prev page', function(req, res) {
      // Decrement the current page and update
      if (!pageFlipDelay && book.page > 1) { book.page--; }
      update();
    });
  })
});

app.get('/', function(req, res) {
  res.sendFile(__dirname+'/public/index.html');
});

server.listen(3001);
