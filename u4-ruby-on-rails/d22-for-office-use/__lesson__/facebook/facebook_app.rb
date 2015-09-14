require 'sinatra'
require 'pg'
require 'pry'

$db = PG.connect(dbname: 'facebook')

class FacebookApp < Sinatra::Base
  get '/profile' do
    @person = $db.exec("SELECT * FROM people WHERE first_name = 'Pan' ").first
    erb :profile, layout: :main_layout
  end

  get '/people' do
    @results = $db.exec("SELECT * FROM people")
    erb :feed, layout: :main_layout
  end

  get '/' do
    @results = $db.exec("SELECT * FROM people")
    erb :feed, layout: :main_layout
  end
end
