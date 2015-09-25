module App
  class Server < Sinatra::Base

    enable :sessions
    set :session_secret, 'secret lovers'

    configure :development do
      require 'pry'
      register Sinatra::Reloader
    end



  end # Server
end # App
