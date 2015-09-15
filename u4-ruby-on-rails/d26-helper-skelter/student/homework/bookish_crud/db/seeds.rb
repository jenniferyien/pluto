# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Author.create([{name: 'George RR Martin', born_on: '1948-09-20', gender:'M'},
               {name: 'J. K. Rowling', born_on: '1965-07-31', gender: 'F'}])
