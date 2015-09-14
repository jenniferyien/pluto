# Humble Ruby Beginnings

### Learning Objectives

Students will be able to:
* See parallels between JavaScript and Ruby
* Apply programming concepts from JavaScript to Ruby
* Declare Ruby variables with different datatypes and scopes
* Utilize Ruby conditionals
* Use loops and enumerables

## Intro _(5m)_
Today we are going to learn a new language called Ruby beyond that it's about utilizing the programming fundamentals we acquired. This maybe daunting at first, but it's going to become a normal as a developer. Let me tell you a little about my experience.

I have worked for several companies and so far each company I have worked for has used a different technology stack. As a developer joining I can't go around telling companies I only know JavaScript and will only do work in that language. If that's my attitude I probably wouldn't get hired to begin with. Companies want people that can learn new things since technology is changing so quickly, so your ability to learn is a huge asset. Me for example, I had to pickup C#, Ruby, Python, and JavaScript.

You could think of it like learning to operate a Black and Decker power drill then a Milwaukee drill. They will fundamentally be the same with some small differences.

Today we are going to do just that, we are going to add Ruby to our tool box. We are going to translate the fundamentals we acquired from JavaScript and apply it to Ruby. Ruby and JavaScript are not going to be identical, but we'll be going over all that today.

> Go to Learning Objectives

## Big Picture for JavaScript and Ruby

### Why Did We Learn JavaScript Then? _(5m)_
Before we get into Ruby, let's discuss why we even want to learn JavaScript.
* It's the defacto language of the web. Without it we can't make very interactive websites.
* It is also a battle tested language. Literally there was a huge browser war about how JavaScript should work where every browser implemented things differently. It's more standardized now, but things still aren't 100% standard, which is why we need tools like jQuery. This competition is good and different ideas emerged. That allows the best ideas to bubble up (ha bubble up). JavaScript also has the most amount of developer time spent working on it.

### Why learn Ruby then _(5m)_
JavaScript sounds pretty good, so why learn Ruby then?
* Currently, you can't do everything with JavaScript.
* Ruby gives developer a way to humanly express ideas to a computer. Some would say that allows developers to think clearer and creatively.
* It has a higher level of abstraction, so developers could be more productive and easily collaborate with others.
* Follows a classical Object Oriented Programming paradigm, so concepts are less weird compared to JavaScript which is an OOP language as well, but it takes prototype approach. Keep that thought in mind because we'll be visiting that very soon.
* There is also a very popular framework called Ruby on Rails, which as you could imagine is built on Ruby. This framework increases productivity and workflow.

## Part Two: Data types and Variables
* Similarities and differences in JS _(15m)_
* JavaScript
	* Booleans
	* Numbers
	* Strings
	* Arrays
	* Objects

* Ruby
Run pry in terminal. This is a gem installed on your system. If this wasn't installed it would be irb (interactive ruby). pry gives us more functionality.

	* Booleans - true and false
	* Integer - 12 (a whole number)
	* Floats - 9.45 (decimal)
	* Strings - "You Are Beautiful"
	* Hashes - {key => value} {key: value, key2: value2} (No dot notation)
	* Symbol - `:name` used to describe a noun, but not proper noun e.g. Atlanta
	* Objects - are not key-value pairs like JavaScript
	* Arrays - [100, 'hello', true, 10.5, [1,2,3], {name: 'Pan'}]

* Variables
	* How do we declare variables?
	* Notice we also don't need semi colons
  * Ruby convention is snake case unlike JS which was camel case.
		```ruby
		some_var = "donuts"
		```
	* Local variables - all variables declared are local by default
	* Global variables - declared with $
	* Constants - declared using all UPPERCASE

* String Interpolation
	* JS - first + " " + last
	* Ruby - "#{first} #{last}"
  * puts gives you a new line after the string

#### Students Do _(10m)_
Declare variables and print out the following sentence filling in the blank using string interpolation in pry
* "My favorite color is _______"
* "My favorite ninja turtle is _______ and his weapon is ______"
* "______ is a great movie star. My favorite movie of theirs is ________"

> # Break _(10m)_

## Part Three: Control Flow
Enough pry for now, lets go into our classwork folder and make a new file to play around with.
* Anybody know what the type of the file should be?
* Make a `test.rb` file and open it up
* Talk about gets`, `chomp`
	* gets: gets input from a user
	* chomp: removes the extra new line

#### Code Along _(5m)_
```
puts "Hey You"
me = gets.chomp
puts me
```

#### Students Do _(10m)_
* Write a command line app that starts with "Welcome to the personality interview game, what is your name?"
* Returns "Hello Name, what is your favorite color?"
* Returns "______ really brings out your eyes, do you have a favorite cartoon?"
* Returns "What? No way, _______ is my favorite cartoon also. Okay last question, if you could have one super power what would it be?"
* Returns "Well thank you (name), you sound like you would make a great superhero using (power) for good"

### if/else statements
	* Logically the if else statement works exactly as in JS
	* BUT as I mentioned earlier Ruby is a development language trying to mirror english
	* So lets take a look at the syntax

#### Code Along _(5m)_
```ruby
name = "Pan"

if name == "Pan"
	puts "FOCUS!!!"
else
	puts "FOCUS ON FOUCSING!!!"
end
```

### Booleans and if/elsifs
* We know that the boolean operators are the same in JS
	* Write out the booleans on the board
  * Explain the that `===` does not work like JS, so refrain from using it.

#### Code Along _(5m)_
```ruby
a = 10
b = 20

if a == b
	puts "They are equal"
elsif a == 10 && b == 20
	puts "Nice math"
else
	puts "do you even math bro"
end
```

#### Students Do _(15m)_
* Build a command line application that asks the user for a number between 1 and 100. Take the number and run it through fizz buzz
* Forgot what fizz buzz is? Here's a refresher.
	* If the number is divisible by five print out "Fizz"
	* If the number is divisible by three print out "Buzz"
	* If the number is divisible by both five and three print out "Fizz Buzz"
	* If the number is not divisible by either five or three print out "(num) is not fizzable"

* starter code
```ruby
1.upto(100) do |i|
  # add logic
end
```

###### Answer for Fizz Buzz

```ruby
1.upto(100) do |i|
  if i % 5 == 0 and i % 3 == 0
    puts "FizzBuzz"
  elsif i % 5 == 0
    puts "Buzz"
  elsif i % 3 == 0
    puts "Fizz"
  else
    puts i
  end
end
```

> # Break _(10m)_

## Loops _(5m)_

* For Loops
	* using ".." gives you up to and including the last number
	* using "..." gives you up to BUT NOT including the last number
```ruby
for x in 1..5
	puts x
end
```
* While Loops
```ruby
# while loops
i = 0
num = 5

while i < num  do
   puts("Inside the loop i = #{i}" )
   i +=1
end

begin
	puts("Inside the loop i = #{i}" )
	i +=1
end while i < num
```

#### Students do _(10m)_
Using each type of loop write code to print 1 - 10

## Arrays _(5m)_
* Arrays are the same in Ruby and JS
	* Many similar methods
	* Index is the same as JS
	* Arrays nested into Arrays are the same
	* .push is different

```ruby
turtles = ["Donny", "Leo", "Mikey"]

turtles.push("Raph") OR turtles << "Raph"

puts turtles
```

#### Students Do _(15m)_
* Write a command line app that takes in a variable with arrays nested as values inside another array. Print out sentences for each of them.

```
people = [["Bobby", "Jaden", "Denis"], ["Red", "Blue", "Green"], ["Limp Bizkit", "3 Doors Down", "Papa Roach"]]

The sentence will look like "Bobby's favorite color is Red, and he loves Limp Bizkit"
```

> # Break _(10m)_

## Hashes _(10m)_
  * Are like the Objects in JS.
	* They are written in snake case (my_hash)
	* They can be written in several ways

```
my_self = {
	"name" => "Jason",
	"age" => 27,
	"color" => "red",
	"hungry" => true
}

OR

my_self = {
	:name => "Jason",
	:age => 27,
	:color => "red",
	:hungry => true
}

OR

my_self = {
	name: "Jason",
	age: 27,
	color: "red",
	hungry: true
}
```
**Quick Sidenote**

* Symbols are names in ruby. They are defined using ":"
	* Following the ":" must be a letter or an underscore.
	* Do not put any spaces in the name of your symbols
* See the above example about hashes keys being declared as symbols instead of quotes
* Symbols are unique, there can be only one. This is why they are ideal for hashes
* ".to_s" method turns a value to a string
* ".to_sym" OR ".intern" method turns a value to a symbol

**Other hash things**

* You can use "Hash.new" to make a new hash. Make sure Hash is capitalized

```
pets = Hash.new
```
* You can also create a hash with predetermined data

```
puts Hash["a", 100, "b", 50]
```
* Add keys/values to hash: same shit as JS

```
food["fruit"] = "apple"
food["meat"] = "bacon"
```

#### Student Do _(10m)_

* Build a command line application that will loop through the tmnt hash below and create two new arrays. One called "turtleName" and one called "turtleColor". Print these arrays
* Lets take it a step further. Print out a sentence such as "Raphael wears a Red bandana"

```
tmnt = {
  "Raphael" => "Red",
  "Donnatello" => "Purple",
  "Leonardo" => "Blue",
  "Michealangelo" => "Orange"
}
```
***

##### Answer

```ruby
tmnt.keys.each do |turtle|
  puts "#{turtle} wears a #{tmnt[turtle]} bandana"
end
```

***

## Enumerables _(15m)_

* Was that annoying to write? Ruby gives us a lot of methods which will reduce the need for loops
* Enumerables: .times, .each, .upto, .downto, .map(the big one)

* Lets talk about the .each method really quick
* .each is similar to the forEach method in JS however you can put two parameters inside of the each method when dealing with hashes.
	* The syntax is `object.each{|item| do something}
	* It's not required to have two parameters
	* What happens when you only put one argument in?
	* What happens when you put two arguments in?

```ruby
tomCruz = {
  "Pilot" => "Top Gun",
  "Racer" => "Days of Thunder",
  "Spy" => "Mission Impossible",
  "Sports Agent" => "Jerry Maguire"
}

tmnt.each do |x|
 	puts "Hello #{x}"
end

tomCruz.each do |key, value|
	puts "Tom Cruize was a #{key} in the movie #{value}"
end
```
**Side Note**

* Jumping very quickly back to arrays, the .each method works similarly with arrays as the forEach in JS

```
array = [1,2,3,4,5]

array.each do |x|
  x += 10
  puts "#{x}"
end
//11 12 13 14 15
```


#### Student Do _(20m)_

* Comment out your current code for the previous exercise. Do the same thing using the .each method.
* A Hash of Hashes
	* Create a hash where the keys are names of family, friends, classmates, and the like.
	* The values are hashes with keys for
		* codeName
		* superPower
		* weapon
	* Print out a paragraph for each person
		* "(key)s secret identity is _____. They use their power of ______ to deliver justice to wrong doers everywhere. The weapon of choice is ______ and it strikes fears in the heart of their enemies."

***


### Other enumerables _(15m)_
* .times
* The times method: iterate something a specific number of times
	* number.times{do this}

	```
	10.times{puts "I Am Beautiful"}
	```
* Other ways of looping: `.upto`, `.downto`, `.each`, `.collect`

	```
	"L".upto("P"){|letter| puts letter}

	90.downto(72){|num| puts num}

	arr.collect {|x| x+10} //does not mutate original array
	```

### map

```
arr.map { |a| 2*a }   #=> [2, 4, 6, 8, 10]
arr                   #=> [1, 2, 3, 4, 5]
arr.map! { |a| a**2 } #=> [1, 4, 9, 16, 25]
arr                   #=> [1, 4, 9, 16, 25]
```
* The map method will return a new array with the new values. The original array is not changed
* if we use the map! it will mutate the original array

## Functions _(10m)_

### Declaring a function
```ruby
def method_name
  # return value is last value or use explicit return
end

def method_name(parameters)

end
```
### Calling a function
```ruby
method_name

method_name()

method_name(parameters)
```
