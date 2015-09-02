puts "(beep-boop whrrrrrr bleep) Welcome to the R2D2 calculator!"

while true do
  puts "Please enter which operator you would like to use ('+', '-', '*', '/', '^', '^1/2', 'sin', 'cos', 'tan', '!'). Enter 'q' to exit."
  user_input = gets.chomp
  if user_input == 'q'
    exit
  elsif user_input == '+' or user_input == '-' or user_input == '*' or user_input == '/' or user_input == '^'
    puts "Enter your first operand:"
    first_operand = gets.chomp.to_i
    puts "Enter your second operand:"
    second_operand = gets.chomp.to_i

    case user_input
    when '+'
      solution = first_operand + second_operand
    when '-'
      solution = first_operand - second_operand
    when '*'
      solution = first_operand * second_operand
    when '/'
      solution = first_operand / second_operand
    when '^'
      solution = first_operand ** second_operand
    end

    puts "The solution to #{first_operand} #{user_input} #{second_operand} is #{solution}."
  elsif user_input == '^1/2' or user_input == 'sin' or user_input == 'tan' or user_input == 'cos'
    puts "Enter operand:"
    operand = gets.chomp.to_i

    case user_input
    when '^1/2'
      solution = Math.sqrt(operand)
    when 'sin'
      solution = Math.sin(operand)
    when 'cos'
      solution = Math.cos(operand)
    when 'tan'
      solution = Math.tan(operand)
    end

    puts "The solution to #{operand} #{user_input} is #{solution}."

  elsif user_input == '!'
    puts "Enter operand:"
    factorial = gets.chomp.to_i
    solution = 1
    for x in 0..factorial
      new_number = solution * x
      solution = x
    end
    puts "The solution to #{factorial} #{user_input} is #{solution}."
  else
    puts "whheeaaarrrrr! beee-ooohhh) You did not enter a viable operator!"
  end
end
