# Guess the Number - Part 4

#This is giving number 7 a constant of secret number
SECRET_NUMBER = 7

# the variable guessed is declared as false
guessed = false

# outputing and printing a string that says they are thinking of a number between 1 and 10 can they guess the number
puts('I\'m thinking of a number between 1 and 10. Can you guess it?')

# doing a loop and giving the while loop a condition of not false = true
while !guessed

  # prompting the user to guess a number between 1 and 10 and producing a integer based off of the number they enter
  guess = gets.chomp.to_i
  # giving it a condition if the secret number, which is constant is equal to the number they entered
  if SECRET_NUMBER == guess
    # than the guessed answer will be true and not false
    guessed = true
  # otherwise (if the if statement is false)
  else
    #it will output telling them that the number they have previously entered is incorrect and they will have to try again
    puts("#{guess}? Try again!")
  #end of the condition
  end
#end of this loop, if the answer is incorrect it will be false (which will start the loop with not false = true) it will loop again,
# if the loop is true (which will be not true = false) the loop will end
end

# once the loop ends, it will state great job
$stdout.puts('Great job!')
