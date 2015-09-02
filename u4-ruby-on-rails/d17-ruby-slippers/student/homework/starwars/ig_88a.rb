solo = true
while solo do
  puts "Freeze! Who are you?"
  user = gets.chomp.downcase
  if user == 'zap'
    for x in 0...20
      puts "zap"
    end
  elsif user != 'han solo'
    puts "You must die! (zap zap kaboom)"
  elsif user == 'han solo'
    puts "You are mine at last, Solo!"
    for y in 0...20
      puts "zap"
    end
    percent = rand(100)
    if percent <= 50
      puts "Solo is caught! Jabba the Hutt will pay handsomely..."
    else
      puts "I'll get you next time, Solo!"
    end
    solo = false
  end
end
