puts "Hello, I am C-3PO, human-cyborg relations."

star_wars = true

while star_wars do
  puts "And your name is?"
  input = gets.chomp.downcase
  if input == 'obi-wan kenobi'
    puts "Oh, marvelous! Simply marvelous! Say hello to R2-D2; he's been looking all over for you!"
    star_wars = false
  else
    puts "It is a pleasure to meet you, #{input}. I'm terribly sorry for prying, but you don't by any chance go by the alias of Obi-Wan Kenobi, do you?"
    question = gets.chomp.downcase
    if question == 'yes' or question == 'y'
      puts "Oh, marvelous! Simply marvelous! Say hello to R2-D2; he's been looking all over for you!"
      star_wars = false
    elsif question == 'no' or question == 'n'
      puts "I've really enjoyed speaking with you, #{input}, but if you'll please excuse me, I have to help my friend find someone named Obi-Wan Kenobi."
      puts "Well R2, I suppose we'll just have to keep looking. R2-D2: (Agreeable droid noises)"
    else
      puts "I'm sorry, I didn't hear you correctly. I only respond to 'yes' or 'no'..."
      puts "Well R2, I suppose we'll just have to keep looking. R2-D2: (Agreeable droid noises)"
    end
  end
end
