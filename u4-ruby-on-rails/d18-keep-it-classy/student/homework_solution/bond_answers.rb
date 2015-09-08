require_relative 'bond_data'

# part 1
def get_gross_for(title)
  film = Bond::MOVIE_DATA.select{ |movie| movie[:title] == title }
  film[0][:gross]
end

# part 2

def get_total_gross
  gross = 0
  Bond::MOVIE_DATA.each { |film| gross += film[:gross].gsub("$","").gsub(",", "").to_i }
  gross
end

gross = get_total_gross

# part 3

def get_bonds
  actors = Bond::MOVIE_DATA.map { |movie| movie[:actor] }
  actors.uniq
end

unique_bonds = get_bonds

# part 4

title = Bond::MOVIE_DATA.map { |movie| movie[:title] }

# part 5

odd_yeared_movies = Bond::MOVIE_DATA.select { |flick| flick[:year].odd? }

# part 6

worst_gross_bond = Bond::MOVIE_DATA.sort_by { |film| film[:gross].delete("$,").to_i }.first

# part 7

highest_gross_bond = Bond::MOVIE_DATA.sort_by { |film| film[:gross].delete("$,").to_i }.last

# part 8

movies_per_actor = get_bonds.map do |actor|
  count = Bond::MOVIE_DATA.count { |movie| movie[:actor] == actor }
  count_hash = {}
  count_hash[actor] = count
  count_hash
end

# part 9

sorted_by_release = Bond::MOVIE_DATA.sort_by { |film| film[:year] }

# Bonus 1

least_used_bond = movies_per_actor.sort_by { |actor| actor.values }.first

# Bonus 2

sorted_by_gross = Bond::MOVIE_DATA.sort_by { |movie| movie[:gross].delete("$,").to_i  }





