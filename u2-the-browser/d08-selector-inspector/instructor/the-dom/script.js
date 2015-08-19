var landmark = $("<h3>");
landmark.text("LANDMARK");

var theBody = $("body");

theBody.append(landmark);

var landmarkUL = $("<ul>");
theBody.append(landmarkUL);

var placesTxt = ["Empire State Building", "Statue of Liberty", "Bubble Tea", "Hot Dogs"]

placesTxt.forEach(function(place){
  var someLi = $("<li>");
  someLi.text(place)
  landmarkUL.append(someLi)
});


var bottlesLeft = 99;
var intervalID;

function nextLine() {
  if( bottlesLeft === 0 ) {
    clearInterval(intervalID);
  }

  var lyrics = $("<p>");
  theBody.append(lyrics);
  lyrics.html(bottlesLeft + " bottles of juice on the wall<br>monkey cheese banana");
  bottlesLeft--
}

intervalID = setInterval(nextLine, 5);













