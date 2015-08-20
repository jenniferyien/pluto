console.log("followship.js loaded");
//Part 1
// An example of using setTimeout to call makeMiddleEarth after 2 seconds.
// setTimeout(makeMiddleEarth, 2000)

var makeMiddleEarth = function() {
  // Create a section tag with an id of middle-earth
  var mEsection = $('<section>');
  var theBody= $('body');
  mEsection.attr('id', 'middle-earth');
  theBody.append(mEsection);
  // Create an article tag for each land in the lands array in characters.js
  lands.forEach(function(land){
    var newLand = $('<article>');
    var newTitle = $('<h1>');
    mEsection.append(newLand);
    newTitle.text(land);
    newLand.append(newTitle);
  });
  // Give each article tag a class of "land"
  var classLand = $('article');
  classLand.addClass('land');
  // Inside each article tag include an h1 with the name of the land
        //view land array code above
  // Append each article.land to section#middle-earth
        //included in above code
  // Append section#middle-earth to the document body
        //included in above code
  // Use setTimeout to delay the execution of the next function (in this case,
  // makeHobbits) by several seconds
};
setTimeout(makeMiddleEarth, 2000);

//Part 2
var makeHobbits = function() {
// Create a ul with an id of "hobbits"
  var hobbitList = $('<ul>');
  hobbitList.attr('id', 'hobbits');
  var theShire = $('article:first-child');
  theShire.append(hobbitList);
  // Create li tags for each Hobbit in the hobbits array in characters.js
  hobbits.forEach(function(hName){
    var hCharacter = $('<li>');
    hCharacter.addClass('hobbit');
    hCharacter.text(hName);
    $('#hobbits').append(hCharacter);
  });
  // Give each li tag a class of "hobbit"
            //code above
  // Set the text of each li.hobbit to one of the Hobbits in the array
            //code above
  // Append the ul#hobbits to the article.land representing "The Shire"
  // (the first article tag on the page)
};

setTimeout(makeHobbits, 2000);
