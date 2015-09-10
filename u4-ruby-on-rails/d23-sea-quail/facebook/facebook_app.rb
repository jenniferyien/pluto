require 'sinatra'


class FacebookApp < Sinatra::Base
  get '/' do
    @people = $db.exec("SELECT * FROM people")
    erb :people, layout: :main_layout
  end

  get '/people' do
    @people = $db.exec("SELECT * FROM people")
    erb :people, layout: :main_layout
  end

  get '/you' do
    @person = $db.exec("SELECT * FROM people WHERE first_name = 'jenn'").first
    erb :you, layout: :main_layout
  end

end
