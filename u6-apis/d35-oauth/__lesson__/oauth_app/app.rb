module App
  class Server < Sinatra::Base

    # these are private, and we don't want them on github
    CLIENT_ID = ENV['GITHUB_CLIENT_ID']
    CLIENT_SECRET = ENV['GITHUB_CLIENT_SECRET']

    enable :sessions
    set :session_secret, 'secret lovers'

    configure :development do
      require 'pry'
      register Sinatra::Reloader
    end

    get('/') do
      base_url = "https://github.com/login/oauth/authorize"
      redirect_uri = "http://localhost:9292/oauth_callback"
      state = SecureRandom.urlsafe_base64 # this should be a secure random string
      session[:auth_state] = state
      # scope is option we can add later.
      #there's a Ruby class that can encode URIs, consider showing.
      query = "client_id=#{CLIENT_ID}&redirect_uri=#{redirect_uri}&state=#{state}"
      @auth_url = "#{base_url}/?#{query}"
      erb :index
    end

    # set this up in dev application
    # github will send redirects to here
    get('/oauth_callback') do
      # binding.pry
      code = params[:code]
      state = params[:state]
      if session[:auth_state] == state
        # we're in!
        "we're in"
        # exchange code for access token with github
        url = "https://github.com/login/oauth/access_token"
        data = {
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          code: code,
          redirect_uri: "http://localhost:9292/oauth_callback"
        }
        # by default we get back XML
        # specify the request headers to accept JSON
        headers = {
          :Accept => :json
        }
        # add the headers as the third argument
        github_response = RestClient.post(url, data, headers)
        session[:access_token] = JSON.parse(github_response)["access_token"]
        redirect '/logged_in'
      else
        "we've been tampered with!"
      end
    end

    get('/logged_in') do
      # set the headers
      headers = {
        :Accept => "application/vnd.github.v3+json",
        :Authorization => "token #{session[:access_token]}",
        :'User-Agent'  => "WDI Melville App"
      }
      url = "https://api.github.com/user"
      github_response = RestClient.get(url, headers)
      @user = JSON.parse(github_response)
      # make a request with the access token
      # to the users end point
      erb :logged_in
    end

  end # Server
end # App
