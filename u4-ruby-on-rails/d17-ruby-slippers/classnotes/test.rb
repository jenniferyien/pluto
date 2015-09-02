# puts 'Welcome to the personality interview game, what is your name?'
# name = gets.chomp
# puts "Hello #{name}, what is your favorite color?"
# color = gets.chomp
# puts "#{color} really brings out your eyes, do you have a favorite cartoon?"
# cartoon = gets.chomp
# puts "What? No way, #{cartoon} is my favorite cartoon also. Okay last question, if you could have one super power what would it be?"
# power = gets.chomp
# puts "Well thank you #{name}, you sound like you would make a great superhero using #{power} for good."

 # control flow (if else else if statements)
# puts "Enter your name:"
# name = gets.chomp
#
# if name == 'Pan'
#    puts "FOCUS!!"
# else
#    puts "FOCUS ON FOUCSING!"
# end

# puts 'Give me a number between 1 and 100'
# number = gets.chomp.to_i
# 1.upto(number) do |i|
#   if i % 3 == 0 and i % 5 == 0
#     puts 'FizzBuzz'
#   elsif i % 3 == 0
#     puts 'Buzz'
#   elsif i % 5 == 0
#     puts 'Fizz'
#   else
#     puts "#{i} is not fizzable"
#   end
# end

# for x in 1..5
#   puts x
# end

# i = 0
# terminate = 10
#
# while i < terminate do
#   puts "something #{i}"
#   i += 1
# end

# begin
#
# end while i < terminate

# turtles = ['Donny','Leo','Mikey'];
# # turtles.push('Raph')
# turtles << 'Raph'
# puts turtles

# for x in 1..10
#   puts x
# end


# start = 0
# last = 10

# while start < last do
#   start += 1;
#   puts start
# end

# begin
#   start += 1
#   puts start
# end while start < last

# people = [["Bobby", "Jaden", "Denis"], ["Red", "Blue", "Green"], ["Limp Bizkit", "3 Doors Down", "Papa Roach"]]
#
# for x in 0...people.length do
#   puts "#{people[0][x]}'s favorite color is #{people[1][x]}, and he loves #{people[2][x]}"
# end

# my_self = {
#   'name' => 'Pan',
#   'gender' => 'male',
#   'hungry' => true
# }
# puts my_self['name']

# my_self = {
#   :name => 'Pan',
#   :gender => 'male',
#   :hungry => 'true',
# }
#
# puts my_self[:name]

# my_self = {
#   name: 'Pan',
#   gender: 'male',
#   hungry: true
# }
#
# puts my_self.keys

# hash = Hash.new
# # hash['fruit'] = 'apple'
# hash[:fruit] = 'apple'

# jenn[:is_awesome] = true

# tmnt = {
#   Raph: 'Red',
#   Don: 'Purple',
#   Leo: 'Blue',
#   Mich: 'Orange'
# }
#
# tmnt.each do |key, value|
#
# puts "#{key} wears a #{value} bandana"
#
# end

# Enumerables
# .each
# .map
# array = [1,2,3,4,5]
# new_array = array.map{|e| e+=10}
# puts new_array

# .select
# meals = [
#   {name: 'pasta', ingredient: 'sauce'},
#   {name: 'fried rice', ingredient: 'eggs'}
# ]
# saucy_meals = meals.select{|meal| meal[:ingredient] == 'sauce'}
# puts saucy_meals

# .times
# .upto
# .downto

# def method_name
#   100
# end
#
# method_name
