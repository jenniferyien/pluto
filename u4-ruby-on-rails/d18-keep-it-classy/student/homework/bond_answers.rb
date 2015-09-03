#attaching the bond_data.rb file to this bond_answers.rb doc
require_relative './bond_data.rb'

# Part 1
#method for getting gross with parameter of title of movie and the array
def get_gross_for(title,array)
  #loops the array and locates each hash in the array
  array.each {|movie|
    #if the title of the move matches the symbol title in the hash then
    if title == movie[:title]
      #gives the movie gross by deleting the $ sign and removing the , to join it and return the integer only
      puts "#{movie[:gross].delete('$').split(',').join.to_i}"
    end
  }
end

#testing purpose calling the moving Goldfinger and giving the array moviedata from the module Bond
get_gross_for('Goldfinger',Bond::MOVIE_DATA)

# Part 2
#Similar to part 1, method for getting gross with parameter of the array
def cumulative_gross(array)
  #gave the franchise total of 0
  bond_franchise = 0
  #loop through the array of each movie
  array.each {|movie|
    #get the movie to be an integer and put that as a variable of the gross
    the_gross = movie[:gross].delete('$').split(',').join.to_i
    #the total of the franchise will add the gross of each movie
    #as it loops it will continue adding all the gross together
    bond_franchise = bond_franchise + the_gross
   }
  #this will output the total gross in integer that is converted back into $ with , to read the total $ about better
  puts "#{bond_franchise.to_s.reverse.scan(/.{1,3}/).join(',').reverse.insert(0,'$')}"
end

#testing purpose and giving the method a array of movie data
cumulative_gross(Bond::MOVIE_DATA)

# Part 3
#the method calls for the array movie data
def bond_actors(array)
  #the variable actors is equal to a new array that only has the key actors in each of the movies
  actors = array.map {|movie| movie[:actor]}
  #outputs only the unique actors so no duplicates will be shown
  puts actors.uniq
end

#testing purpose and giving the method a array of movie data
bond_actors(Bond::MOVIE_DATA)

# Part 4
# method that calls for the array movie data
def bond_movies(array)
  #the variable will be a new array of all the bond movie titles in the movie data array
  the_movies = array.map {|movie| movie[:title]}
  #outputs only the titles of the movies
  puts the_movies
end

#testing purpose and giving the method a array of movie data
bond_movies(Bond::MOVIE_DATA)

# Part 5
# method that calls for the array movie data
def odd_years(array)
  #the variable movies is a new array of the filter array movie data
  the_movies = array.select {|movie|
      #it is filtering if the movie year is odd
      if movie[:year].odd?
        #if it is odd it will give the hash movie
        movie
      end
  }
  #this will output the new array of movies that are in odd number of years
  puts the_movies
end

#testing purpose and giving the method a array of movie data
odd_years(Bond::MOVIE_DATA)

# Part 6
# method that calls for the array movie data
def worst_movie(array)
  #variable movie gross will be a new array of all the gross for all the movies
  movie_gross = array.map {|movie|
    #converting movie gross into an integer
    movie[:gross].delete('$').split(',').join.to_i
    }
  #variable bad movie is taking the new array of movie gross and looking for the min grossing movie
  bad_movie = movie_gross.min
  # the worst grossing bond variable is a new array filtering for movies that gross only matches the bad movie gross
  worst_grossing_bond = array.select {|movie| movie[:gross].delete('$').split(',').join.to_i == bad_movie}
  # this outputs the array with the has of the worst grossing bond movie
  puts worst_grossing_bond
end

#testing purpose and giving the method a array of movie data
worst_movie(Bond::MOVIE_DATA)

# Part 7
# method that calls for the array movie data
def best_movie(array)
  #variable movie gross will be a new array of all the gross for all the movies
  best_gross = array.map {|movie|
    #converting movie gross into an integer
    movie[:gross].delete('$').split(',').join.to_i
    }
  #variable awesome movie is taking the new array of movie gross and looking for the max grossing movie
  awesome_movie = best_gross.max
  # the highest grossing bond variable is a new array filtering for movies that gross only matches the awesome movie gross
  highest_grossing_bond = array.select {|movie| movie[:gross].delete('$').split(',').join.to_i == awesome_movie}
  # this outputs the array with the has of the worst grossing bond movie
  puts highest_grossing_bond
end

#testing purpose and giving the method a array of movie data
best_movie(Bond::MOVIE_DATA)

# Part 8
# method that calls for the array movie data
def actor_list(array)
  #the variable actors is equal to a new array that only has the key actors in each of the movies
  actor_in_bond = array.map {|movie| movie[:actor]}
  #list variable gives me the array of unique people out of the list of array
  list = actor_in_bond.uniq
  #variable movies per actor is equal to a iterator that will give me a new array of the movie actor from the list and
  #check the number of times the actor's name shows up in the array actor in bond then it will
  #give me an array of the actors name with the number of movie it is in
  movies_per_actor = list.map {|movie| "#{movie} => #{actor_in_bond.count(movie)}"}
  #outputs the list of actors with number of movies they are in
  puts movies_per_actor
end

#testing purpose and giving the method a array of movie data
actor_list(Bond::MOVIE_DATA)

# Part 9
# method that calls for the array movie data
def sorting(array)
  #variable sorted by release is equal to the array movie data and sorting it by the year of earliest to now
  sorted_by_release = array.sort_by {|year| year[:year]}
  #outputs the array list sorted by release
  puts sorted_by_release
end

#testing purpose and giving the method a array of movie data
sorting(Bond::MOVIE_DATA)

# Bonus Part 1
#method is the same as Part 8
def actor_movie_list(array)
  actor_in_bond = array.map {|movie| movie[:actor]}
  list = actor_in_bond.uniq
  #movies per actor variable is a new array of objects listing the key value of actor name and movie number count per actor
  movies_per_actor = list.map {|movie| {actor_name: movie, movie_num: actor_in_bond.count(movie)}}
  #movies per variable gives an array of just the number of movie numbers
  movies_per = movies_per_actor.map {|movie| movie[:movie_num]}
  #variable least num gives us the lowest number of movie num
  least_num = movies_per.min
  #lowest acting num variable gives us a array, filtering throught the hashes of movies per actor and looking at
  #the movie num and matching it with the least num of movie an actor has been in and returning that hash
  lowest_acting_num = movies_per_actor.select{|actors| actors[:movie_num] == least_num}
  # this outputs the hash of the actor with the lowest acting number role
  puts lowest_acting_num
end

#testing purpose and giving the method a array of movie data
actor_movie_list(Bond::MOVIE_DATA)

# Bonus Part 2
# method that calls for the array movie data
def sorting_gross(array)
  #variable sorted by release is equal to the array movie data and sorting it by the gross but
  #first needing to delete and split so it is able to sort the integers only in the order of smallest to largest
  #then reversing the order so the largest grossing movie comes first
  sorted_by_gross = array.sort_by {|gross_movie| gross_movie[:gross].delete('$').split(',').join.to_i}.reverse
  #outputs the array list sorted by release
  puts sorted_by_gross
end

#testing purpose and giving the method a array of movie data
sorting_gross(Bond::MOVIE_DATA)

# Bonus Part 3
# All my questions were all already originally in methods 
