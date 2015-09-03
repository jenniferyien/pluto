require "sinatra"

class WineryWebsite < Sinatra::Base
  get '/' do

    File.read('homepage.html')
  end

  get '/add/:num1/:num2' do |num1, num2|
    (num1.to_i+num2.to_i).to_s
  end

  get '/search' do
    "#{params["search"].upcase}"
  end
end
