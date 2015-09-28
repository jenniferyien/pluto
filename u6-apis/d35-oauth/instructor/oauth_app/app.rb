module App
  class Server < Sinatra::Base

    # these are private, and we don't want them on github
    CLIENT_ID       = ENV['GITHUB_CLIENT_ID']
    CLIENT_SECRET   = ENV['GITHUB_CLIENT_SECRET']
    FACEBOOK_ID     = ENV['FACEBOOK_OAUTH_ID']
    FACEBOOK_SECRET = ENV['FACEBOOK_OAUTH_SECRET']

    enable :sessions
    set :session_secret, 'secret lovers'

    configure :development do
      require 'pry'
      register Sinatra::Reloader
    end

    get '/' do
      #builds github OAUTH URL
      base_url = "https://github.com/login/oauth/authorize"
      redirect_uri = "http://localhost:9292/oauth_callback"
      state = SecureRandom.urlsafe_base64 # a random unguessable string

      session[:auth_state] = state # saving this for checking later
      query = "client_id=#{CLIENT_ID}&redirect_uri=#{redirect_uri}&state=#{state}"

      @auth_url = "#{base_url}/?#{query}"

      #builds facebook OAuth URL
      fb_redirect_uri = "http://localhost:9292/facebook/oauth_callback"
      @fb_url         = "https://www.facebook.com/dialog/oauth?client_id=#{FACEBOOK_ID}&redirect_uri=#{fb_redirect_uri}&state=#{state}"

      erb :index
    end

    get '/oauth_callback' do
      #  check if the response is ours
      code  = params[:code]
      state = params[:state]

      if session[:auth_state] == state
        # we're good, so lets query Github

        access_token_url = "https://github.com/login/oauth/access_token"

        data = {
              client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
                   code: code,
           redirect_uri: "http://localhost:9292/oauth_callback"
        }

        headers = {
          Accept: :json
        }

        github_response = RestClient.post( access_token_url, data, headers)

        session[:access_token] = JSON.parse(github_response)["access_token"]

        redirect '/logged_in'

      else
        "WE'VE BEEN TAMPERED WITH"
      end # checking state


    end#/github_oauth_callback

    get '/facebook/oauth_callback' do
      state = params[:state]
      code  = params[:code]

      if state == session[:auth_state] # if good, lets get the token
        fb_auth_url = "https://graph.facebook.com/v2.3/oauth/access_token?"

        data = {
                  client_id:  FACEBOOK_ID,
              client_secret:  FACEBOOK_SECRET,
                       code:  code,
               redirect_uri:  "http://localhost:9292/facebook/oauth_callback"
               }

        facebook_response = RestClient.post fb_auth_url, data

        session[:access_token] = JSON.parse(facebook_response)["access_token"]

        redirect '/facebook_logged_in'
      else
        "WE'VE BEEN INTERCEPTED BETWEEN US AND FACEBOOK"
      end #checking state

    end# fb_oauth_callback

    get '/logged_in' do
      # auth established, lets get shit from github

      headers = {
        Accept: "application/vnd.github.v3+json",
        Authorization: "token #{session[:access_token]}"
      }

      url = "https://api.github.com/user"

      github_response = RestClient.get url, headers
      # binding.pry

      @user = JSON.parse github_response

      erb :logged_in

    end # w/ GitHub


    get '/facebook_logged_in' do

      url = "https://graph.facebook.com/me"

      data = {
        Authorization: "Bearer #{session[:access_token]}"
      }


      facebook_user = RestClient.get url, data
              @user = JSON.parse facebook_user
      binding.pry

      erb :facebook_logged_in
    end # w/ Facebook

  end # Server
end # App











