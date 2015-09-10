require 'sinatra'
require './models/blogger'
require './models/blog'
require 'active_support/all'

class BedrockBloggers < Sinatra::Base

  attr_accessor :page_title, :current_blogger

  get '/' do
    erb :index
  end

  get '/bloggers/:id/:name' do
    @blogger = Blogger.find(params[:id])
    erb :blogger
  end

  get '/blogs' do
    @blogs = Blog.all
    erb :blogs
  end

  get '/bloggers/:id/blogs' do
    get :blogs
  end

end
