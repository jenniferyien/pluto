require 'sinatra'
require 'pg'

$db = PG.connect(dbname: 'facebook')

class FacebookApp < Sinatra::Base
  get '/' do
    @results = $db.exec("SELECT * FROM people")
    erb :homepage
  end

end
