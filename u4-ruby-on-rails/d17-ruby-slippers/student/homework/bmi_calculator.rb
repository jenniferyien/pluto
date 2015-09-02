# Body Mass Index(BMI) - Part 1
puts 'What is your weight in pounds?'
pounds = gets.chomp.to_i
puts 'What is your height in inches?'
height = gets.chomp.to_i

  step_1 = pounds * 703
  step_2 = height ** 2
  calculation = step_1 / step_2

puts "You have a BMI of #{calculation}."
