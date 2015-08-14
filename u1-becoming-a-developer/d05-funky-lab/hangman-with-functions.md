## Prompt: 
### Using Functions and Loops create the following functions:

 * Create a function that takes a correctly guessed letter and returns a string that is the correct number of _ (underscores) with the new correct letter in the string.
   - Example: 
     - The function should be called like this: var newGuesses = setWord( currentGuesses, correctLetter, wholeWord );
     - Given: wholeWord == 'cat' AND currentGuesses == '___' AND correctLetter == 'a'
     - Function should return the string '_ a _';

* Create a function that sets the initial state of the word to be guessed.
 - Example: 
   - The function should be called like this: var newGuesses = setInitialState( wholeWord );
   - Given: wholeWord == 'cat' 
   - Function should return the string '_ _ _'    
   

* Create a function that picks a random word from an array of words.
 - Example: 
     - The function should be called like this: var word = randomWord(wordsArray);
     - Given: var wordsArray = ['cat','dog','bear','poop','fantastical'] 
     - Function should return a random word

* Bonus: Combine the function that returns the correct letter guess and the initial state (DRY)

