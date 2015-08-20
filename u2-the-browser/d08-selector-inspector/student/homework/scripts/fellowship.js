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

//Part 3

var keepItSecretKeepItSafe = function() {
  // Create a div with an id of 'the-ring'
  var ringDiv = $('<div>');
  ringDiv.attr('id', 'the-ring');
  // Give div#the-ring a class of 'magic-imbued-jewelry'
  ringDiv.addClass('magic-imbued-jewelry');
  // Add an event listener so that when a user clicks on the ring,
  // The nazgulScreech function (provided in index.html) is invoked
  // look up .click() - https://api.jquery.com/click/ in the jQuery docs to see how this works
  // it'll look like target.click(nazgulScreech)
  // bit of a freebie since we're not covering events until tomorrow
  $('#the-ring').click(function(nazgulScreech){
  });
  // Add div#the-ring as a child element of the li.hobbit representing "Frodo"
  $('.hobbit').first().append(ringDiv);
  // Use setTimeout to delay the execution of the next function
};

setTimeout(keepItSecretKeepItSafe, 2000);

//Part 4
var makeBuddies = function() {
  // Create an aside tag
  var side = $('<aside>');
  // Create a ul tag with an id of "buddies" and append it to the aside tag
  var listBuddies = $('<ul>');
  listBuddies.attr('id', 'buddies');
  side.append(listBuddies);
  // Create li tags for each buddy in the buddies array in characters.js
  buddies.forEach(function(budName){
    var budList = $('<li>');
    budList.addClass('buddy');
    budList.text(budName);
    listBuddies.append(budList);
  });
  // give each li tag a class of "buddy" and append them to "ul#buddies"
        //code above
  // Insert the aside tag as a child element of the section.land representing "Rivendell"
  $('article:first-child').next().append(side);
  // Use setTimeout to delay the execution of the next function
}

setTimeout(makeBuddies, 2000);

//Part 5
var beautifulStranger = function() {
  // Find the li.buddy representing "Strider"
  var Strider = $('aside li:nth-child(5)');
  // Change the "Strider" textnode to "Aragorn" and make its text green
  Strider.text('Aragorn');
  Strider.css('color','green');
  // Use setTimeout to delay the execution of the next function
}

setTimeout(beautifulStranger, 2000);
