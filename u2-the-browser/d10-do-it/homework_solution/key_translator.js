// we use an object to map values to their alternates
// if a user decides to expand the list of characters to replace,
// you'd just need to update one thing
// now i dont need 20 replace calls
var commands = { command: "⌘",
                     tab: "⇥",
                  return: "⏎",
                  option: "⌥",
                 control: "⌃",
                     esc: "⎋",
                    left: "←",
                    down: "↓",
                      up: "↑",
                   right: "→",
                   shift: "⇧",
                   eject: "⏏",
                    caps: "⇪"
                }


var input  = $(".input");
var output = $(".output");

// register the event listener for keyup, keydown fires before the character gets put into your textbox
// we use .text() so set/get content in a content tag(div,p,etc..)
// we use .val() to get/set values from inputs tags
// all i do is parse the input and set its new value to output
input.keyup( function(e){
   output.text( parseText(input.val()) );
} );


// this is where the 'magic' happens
// 'code fold' the comments if they're taking too much space
function parseText(sentence){
   // split the sentence into an array of words so we can iterate over it
   var words = sentence.split(" ");

   // if you look on MDN, index is an additional parameter of the forEach() function
   // it's the 'i' in your for loop, i just named it index
   // Params in JS are "optional", so it works with just the currentValue
   // "optional" in that it'll just keep running
   words.forEach( function(word, index){
     // lowercase them here to make the rest of our code cleaner
     var searchTerm = word.toLowerCase();

     // now to search for the word in our commands object
     // when you try to access a value from an object and it doesnt exist,
     // you get back undefined, which is falsey
     // so if it exists, we take the value and plop it back into the words array
     // using the current words index
     if( commands[searchTerm] ){
       words[index] = commands[searchTerm];
     }

   });//forEach

   // splat the new sentence back together and return it
   return words.join(" ");
}
