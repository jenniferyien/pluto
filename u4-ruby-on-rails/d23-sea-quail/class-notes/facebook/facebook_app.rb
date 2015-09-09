require 'sinatra'

class FacebookApp < Sinatra::Base
  
  get '/' do
    @results = $db.exec("SELECT * FROM people")
    erb :homepage
  end

end
