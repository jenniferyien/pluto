class BloggersController < ApplicationController

  def index
<<<<<<< HEAD
    #view all bloggers
    @bloggers = Blogger.all
  end

  def show
    #View one blogger
=======
      @bloggers = Blogger.all
  end

  def show
>>>>>>> 56cf2f5bb562c006994b5768923b86f3e11c2362
    @blogger = Blogger.find(params[:id])
  end

end
