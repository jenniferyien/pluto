require 'sinatra'
require 'pg'
# require_relative './lib/star_power.rb'

$db = PG.connect(dbname: 'star_stalker')

class StarStalker < Sinatra::Base

  get '/' do
    erb :index, layout: :default_layout
  end

  get '/stars' do
    @celebrity = $db.exec('SELECT * FROM stars')
    erb :stars, layout: :default_layout
  end

  get '/stars/*' do
    @celebrity = $db.exec('SELECT * FROM stars')
    @person = $db.exec('SELECT * FROM stars WHERE id IN ($1)',params[:splat])
    # @power = StarPower::STARS
    erb :celebrity, layout: :default_layout
  end

  get '/about' do
    erb :about, layout: :default_layout
  end




end
