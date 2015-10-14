require 'securerandom'
require 'sinatra/base'
require 'sinatra/reloader'
require 'rest-client'

require_relative './app'

run App::Server
