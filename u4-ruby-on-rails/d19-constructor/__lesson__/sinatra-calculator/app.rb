# I have provided two solutions. the second one (the one that isn't refactored to include the Calculator class) is commented out below the refactored one.

# the server with using the Calculator class and switch statements

require_relative 'calculator'

module SinatraCalculator
  class Server < Sinatra::Base

    configure :development do
      register Sinatra::Reloader
    end

    get '/' do
      redirect '/calc'
    end

    get '/calc' do
      "<h1>Hi there, welcome to the Sinatra Calculator, for all your calculating needs.<h1>"
    end

  end #end class
end #end module
