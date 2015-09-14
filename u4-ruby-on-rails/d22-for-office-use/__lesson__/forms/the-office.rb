require 'sinatra'
require 'pg'

$db = PG.connect({dbname: 'the-office'})

class TheOffice < Sinatra::Base

  get '/style.css' do
    content_type 'text/css'
    scss :style, :views => File.expand_path('assets/stylesheets', settings.root)
  end

  get '/' do
    erb :homepage
  end

  get '/for-office-use-only' do
    @form = $db.exec_params("INSERT INTO forms (name, email) VALUES ($1, $2) RETURNING *", [params[:name], params[:email]]).first
    erb :submitted
  end

  get '/forms' do
    @forms = $db.exec_params("SELECT name, email FROM forms GROUP BY name, email")
    erb :forms
  end

end
