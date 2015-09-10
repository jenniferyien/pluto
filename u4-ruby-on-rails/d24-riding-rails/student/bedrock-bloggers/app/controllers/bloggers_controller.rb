class BloggersController < ApplicationController

  def index
    #view all bloggers
    @bloggers = Blogger.all
  end

  def show
    #View one blogger
    @blogger = Blogger.find(params[:id])
  end

end
