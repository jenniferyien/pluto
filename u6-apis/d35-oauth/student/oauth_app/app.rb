module App
  class Server < Sinatra::Base

    CLIENT_ID = ENV['GITHUB_CLIENT_ID']
    CLIENT_SECRET = ENV['GITHUB_CLIENT_SECRET']

    enable :sessions
    set :session_secret, 'secret lovers'

    configure :development do
      require 'pry'
      register Sinatra::Reloader
    end

    get '/' do
      base_url = 'https://github.com/login/oauth/authorize'
      redirect_uri = 'http://localhost:9292/oauth_callback'
      state = SecureRandom.urlsafe_base64

      session[:auth_state] = state

      query = "client_id=#{CLIENT_ID}&redirect_uri=#{redirect_uri}&state=#{state}"

      @auth_url = "#{base_url}/?#{query}"

      erb :index
    end

    get '/oauth_callback' do
      code = params[:code]
      state = params[:state]

      if session[:auth_state] == state
          access_token_url = 'https://github.com/login/oauth/access_token'
          data = {
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            code: code,
            redirect_uri: 'http://localhost:9292/oauth_callback'
          }
          headers = {
            Accept: :json
          }

          github_response = RestClient.post(access_token_url, data, headers)
          session[:access_token] = JSON.parse(github_response)["access_token"]
          redirect '/logged_in'
      else
        "WE'VE BEEN TAMPERED WITH"
      end
    end

    get '/logged_in' do
      headers = {
        Accept: 'application/vnd.github.v3+json',
        Authorization: "token #{session[:access_token]}"
      }
      url = 'https://api.github.com/user'

      github_response = RestClient.get(url, headers)

      @user = JSON.parse(github_response)
      erb :logged_in
    end

  end # Server
end # App
