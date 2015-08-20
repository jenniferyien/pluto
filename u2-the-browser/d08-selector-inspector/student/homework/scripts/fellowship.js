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
  var Strider = $('aside li:nth-child(4)');
  // Change the "Strider" textnode to "Aragorn" and make its text green
  Strider.text('Aragorn');
  Strider.css('color','green');
  // Use setTimeout to delay the execution of the next function
}

setTimeout(beautifulStranger, 2000);

//Part 6
var leaveTheShire = function() {
  // Assemble the Hobbits and move them to Rivendell
  $('#hobbits').insertAfter($('aside'));
  // Use setTimeout to delay the execution of the next function
}

setTimeout(leaveTheShire, 2000);

//Part 7
var forgeTheFellowShip = function() {
  // Create a div with an id of 'the-fellowship' within the section.land for "Rivendell"
  var fellowship = $('<div>');
  fellowship.attr('id', 'the-fellowship');
  $('article:nth-child(2)').append(fellowship);
  // Add each hobbit and buddy one at a time to 'div#the-fellowship'
  // for(var i = 1; i < 5; i++){
  //   var hobbit = $('#hobbits:nth-child(i)');
  //   fellowship.append(hobbit);
  //   alert(hobbit.toString() + "have just joined your part.");
  // }
  $('li.hobbit').each(function(index){
    fellowship.append($(this));
    alert($(this).text() + " has just joined your party.");
  });
  $('li.buddy').each(function(index){
    fellowship.append($(this));
    alert($(this).text() + " has just joined your party.");
  });
  // After each character is added make an alert that they have joined your party
  // Use setTimeout to delay the execution of the next function by several seconds
}

setTimeout(forgeTheFellowShip, 2000);

//part 8
var theBalrog = function() {
  // Select the "li.buddy" for "Gandalf"
  var gandalf = $('#the-fellowship li:nth-child(5)');
  // And change its textNode to "Gandalf the White"
  gandalf.text('Gandalf the White');
  // Apply style to the element, adding a "3px solid white" border to it
  gandalf.css('border','3px solid white');
  // Use setTimeout to delay the execution of the next function
}

setTimeout(theBalrog, 2000);

//part 9
// Boromir's been killed by the Uruk-hai!
  var hornOfGondor = function() {
  // Pop up an alert that the Horn of Gondor has been blown
  alert("The Horn of Gondor has been blown!!");
  // Put a line-through on Boromir's name
  var boromir = $('#the-fellowship li').last();
  boromir.css('text-decoration', 'line-through');
  // And fade Boromir's opacity to 0.3 (he lives on in spirit)
  boromir.css('opacity','0.3');
  // Use setTimeout to delay the execution of the next function
}

setTimeout(hornOfGondor, 2000);

//part 10
var itsDangerousToGoAlone = function(){
  // Take Frodo and Sam out of The Fellowship and move them to Mordor
  var frodo = $('#the-fellowship li').first();
  var sam = $('#the-fellowship li:nth-child(2)');
  var mordor = $('section article').last();
  mordor.append(frodo);
  mordor.append(sam);
  // Add a div with an id of 'mount-doom' to Mordor
  var doom = $('<div>');
  doom.attr('id','mount-doom');
  mordor.append(doom);
  // Use setTimeout to delay the execution of the next function
}

setTimeout(itsDangerousToGoAlone, 2000);

//part 11
var weWantsIt = function() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var gollum = $('<div>');
  gollum.attr('id','gollum');
  var mordor = $('section article').last();
  mordor.append(gollum);
  // Remove The Ring from Frodo and give it to Gollum
  gollum.append($('#the-ring'));
  // Move Gollum into Mount Doom
  $('#mount-doom').append($('#gollum'));
  // Use setTimeout to delay the execution of the next function
}

setTimeout(weWantsIt, 2000);

//part 12
var thereAndBackAgain = function() {
  // Remove Gollum and the Ring from the document
  $('div').remove('#gollum');
  // Move all the hobbits back to The Shire
  $('section article').first().append($('.hobbit'));
  // Add the class "collapse" to Mordor
  var mordor = $('section article').last();
  mordor.addClass('collapse');
}

setTimeout(thereAndBackAgain, 2000);
