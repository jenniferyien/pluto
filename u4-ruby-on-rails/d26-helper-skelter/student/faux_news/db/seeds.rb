# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Author.create([{username: 'Earnest Hemingway', email: 'hemingway@cu.ba'},
               {username: 'Hunter S Thompson', email: 'gonzo@jl.sm'},
               {username: 'Herman Melville',   email: 'ahav@gmail.com'},
               {username: 'Toni Morrison',     email: 'beloved@gmail.com'}
              ])
