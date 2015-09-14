# Ruby Reps!!!

![Ruby from Steven Universe](https://33.media.tumblr.com/427dcbc2b4552249015882eee96c9742/tumblr_nl4i0b06ta1uq5duko1_400.gif)

Today we began our exploration of the Ruby programming language. We will be using it to write servers, but first we need some reps. The assignments below not only reinforce, but also build upon what we talked about in class. Therefore, you will likely have to reference the Ruby documentation for unfamiliar methods and be programming sleuths.

## Learning Objectives

- Getting acquainted with a new language
- Differentiating it from JavaScript
- Practice searching through [Ruby documentation](http://ruby-doc.org/core-2.2.0/)

## Setup

Work in today's `homework` folder. Each part will task you with writing code in its own ruby file. The filename will be given to you at the beginning of each step. You can run each file in bash by typing `ruby filename.rb`

## Completion

Completion for this 4 HW parts. Any order is fine but they are scaffolded off of each other. As always, more is better; healthy living is best.

### Part 1 - Body Mass Index (BMI)

**File name:** `bmi_calculator.rb`

Write a program that:

1. Prints to Standard Output(gets) to ask what your weight is in pounds.
1. Reads from Standard Input(puts) your weight in pounds.
1. Prints to Standard Output to ask what your height is in inches.
1. Reads from Standard Input your height in inches.
1. Runs the height and weight information through the BMI algorithm:
  - Step 1: Multiply your weight in pounds by 703.
  - Step 2: Multiply your height in inches by itself (ie, *square* it).
  - Step 3: Divide the figure from Step 1 by the figure in Step 2.
1. Prints to Standard Output your BMI (rounded to the nearest integer)!

Example:

```
ruby bmi_calculator.rb
What is your weight in pounds?
215
What is your height in inches?
76
You have a BMI of 26.
```

> Bobby and Dennis are having a competition to reduce their BMI over the summer. What are your plans to stay healthy in class?

### Part 2 - Rehashing Batman

Filename: `batman.rb`

Rewrite the code below using a **hash** called `batman`. Rewrite the `msg` variable to reference this new hash vs. the variable references below:

```
f_name = "Bruce"
l_name = "Wayne"
billionaire = true
alter_ego = "Batman"

msg = "#{alter_ego} is the secret identity of #{f_name} #{l_name}, an American #{billionaire ? "billionaire, industrialist, and philanthropist" : "hobo"}."

$stdout.puts(msg)
```

> Another Batman movie? Will Matt Damon play Robin?

### Part 3 - Fine Wines  

Someone with disposable income has hired you to manage his or her wine cellar. They have provided you with data with which you can start.

For this part, just work in pry, then when everything's working save your work in a file called `wines.rb`.

```rb
wine_cellar = [
  { :label => "Rutherford Hill", :type => "Chardonnay", :color => "red" },
  { :label => "Nina Veneto", :type => "Pinot Grigio", :color => "white" },
  { :label => "Wairau River", :type => "Sauvignon Blanc", :color => "white" },
  { :label => "Tangley Oaks", :type => "Merlot", :color => "red" },
  { :label => "Chimney Rock", :type => "cabernet Sauvignon", :color => "red" },
  { :label => "Sanford", :type => "Pinot Noir", :color => "red" },
  { :label => "Alderbrook", :type => "Pinot Noir", :color => "red" },
  { :label => "Colavita", :type => "Pinot Noir", :color => "red" },
  { :label => "Markham", :type => "Chardonnay", :color => "white" },
  { :label => "Angeline", :type => "Pinot Noir", :color => "red" }
]
```

1. Create a variable called `saved_for_special_occasion`. Assign it the third hash from the `wine_cellar` array (a Sauvignon Blanc from Wairau River).
1. Create a variable called `swill`. Assign it the fourth hash from the `wine_cellar` array (a Merlot from Tangley Oaks).
1. Your client misentered his data! Change the color of the Rutherford Hill Chardonney from "red" to "white".
1. Add a wine of your choice to the back of the cellar. Structure this wine as a hash, with key-value pairs for `:color`, `:type`, and `:label`.
1. Write a method, `retrieves_random_wine_for_party` which __removes__ a random wine from the cellar. Then use it several times, until you feel that the people upstairs are having a good time.

### Part 4 - Guess the Number

Filename: `guess_the_number.rb`

- Paste in the following code and then *read* it.
- Read each line of code outloud and articulate what each line does.
- Write a comment for *each line* explaining what it does

```rb
SECRET_NUMBER = 7
guessed = false

puts('I\'m thinking of a number between 1 and 10. Can you guess it?')

while !guessed
  guess = gets.chomp.to_i
  if SECRET_NUMBER == guess
    guessed = true
  else
    puts("#{guess}? Try again!")
  end
end

$stdout.puts('Great job!')
```

### Part 5 - Iteration

Filename: `students.rb`

1. Copy the array below into your file. Inside it, write code to list the students in the array above by printing them to standard out.
2. Print out only the first initials of the students above (eg, "Yuka" --> "Y.").
3. Create a new array of just the students whose names start with vowels.

```rb
["Jacob Shemkovitz",
"Andres Carter",
"Steph Nathai",
"Meiji Chen",
"Nick Marshall",
"Jennifer Yien",
"Brian Deutsch",
"Edward Petner",
"Esther Zinn",
"Harrison Riddell",
"Victoria Donnelly",
"Yuka Nagai",
"Christopher Smith",
"Jaskaranjit Singh",
"Pierre Cajuste",
"Joy Morgan",
"Pamela Nevins",
"Zoe Sachs",
"Eric Kim",
'Salvatore "Toti" Fanara',
"Mohamed Elgendy",
"Raquel Hosein",
"Matt Morrisey",
"Calvin Yeung",
"Josh Bubis"]
```
### Part 6 - I Know Where You Code

Filname: `githubs.rb`

1. List the students in the array above by printing their names to standard out.
2. Print out only the students last names.
3. Create an array of all of the students' GitHub name.

```rb
class = [
 {
  name: "Jacob Shemkovitz",
  github: "jforjacob"
 },
 {
  name: "Andres Carter",
  github: "cartermarino"
 },
 {
   name: "Steph Nathai",
   github: "stephnathai"
 },
 {
   name: "Meiji Chen",
   github: "meijichen"
 },
 {
   name: "Nick Marshall",
   github: "nialbima"
 },
 {
   name: "Jennifer Yien",
   github: "jenniferyien"
 },
 {
   name: "Brian Deutsch",
   github: "bgdeutsch"
 },
 {
   name: "Edward Petner",
   github: "edpetner"
 },
 {
   name: "Esther Zinn",
   github: "estherzinn"
 },
 {
   name: "Harrison Riddell",
   github: "HarrisonRiddell"
 },
 {
   name: "Victoria Donnelly",
   github: "nealado"
 },
 {
   name: "Yuka Nagai",
   github: "yukanagai"
 },
 {
   name: "Christopher Smith",
   github: "smithopher"
 },
 {
   name: "Jaskaranjit Singh",
   github: "jaskar14"
 },
 {
   name: "Pierre Cajuste",
   github: "pcajuste"
 },
 {
   name: "Joy Morgan",
   github: "morga147"
 },
 {
   name: "Pamela Nevins",
   github: "pnev"
 },
 {
   name: "Zoe Sachs",
   github: "zoesachs"
 },
 {
   name: "Eric Kim",
   github: "erickim91"
 },
 {
   name: 'Salvatore "Toti" Fanara',
   github: "tfbkny"
 },
 {
   name: "Mohamed Elgendy",
   github: "moelgendy"
 },
 {
   name: "Raquel Hosein",
   github: "raquelhosein"
 },
 {
   name: "Matt Morrisey",
   github: "mattydevicce"
 },
 {
   name: "Calvin Yeung",
   github: "calvinyeung"
 },
 {
   name: "Josh Bubis",
   github: "joshbubis"
 }
]
```

## Bonus

Translate your Star Wars Calculator to Ruby. Save your files into a `starwars` folder.

### Bonus Readings

- [WAT](https://www.destroyallsoftware.com/talks/wat)
- [Predicate Methods](http://pragmati.st/2012/03/24/the-elements-of-ruby-style-predicate-methods/)
- [Loading Code Libraries](https://practicingruby.com/articles/ways-to-load-code)
- [Methods](http://ruby.bastardsbook.com/chapters/methods/)
