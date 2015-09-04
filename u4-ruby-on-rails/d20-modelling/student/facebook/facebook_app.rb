require 'sinatra'
require 'pg'

$db = PG.connect(dbname: 'facebook')

class FacebookApp < Sinatra::Base
  get '/' do
    @result = $db.exec ("SELECT * FROM people")
    erb :homepage
  #   output = "<ul>"
  #   result.each do |person|
  #     output += "<li>#{person ['first_name']}</li>"
  #   end
  # output += "</ul>"
  end

  # get '/style.css' do
  #   File.read('style.css')
  # end
  get '/style.css' do
    content_type 'text/css'
    File.read("./style.css")
  end

end
