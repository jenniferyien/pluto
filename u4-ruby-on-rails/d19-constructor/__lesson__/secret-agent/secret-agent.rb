require 'sinatra/base'
require 'active_support/all'
require 'sinatra/reloader'

module SecretAgent
  class Server < Sinatra::Base
    configure :development do
      register Sinatra::Reloader
    end

    get '/' do
      status 200
      $time = 30.seconds.from_now
      "I have a secret message for you Agent 007
       This message will be deleted at #{$time}
       <a href=\"/message\">View Secret Message</a>"
    end

    get '/message' do
      if Time.now > $time
        status 404
        "Nothing to see here..."
      else
        status 200
        "The package will be delivered at 3:30pm on the dock.
         Further instructions will be provided by the man in the yellow hat.
         This message will self destruct at #{$time - Time.now} seconds"
      end
    end

  end
end
