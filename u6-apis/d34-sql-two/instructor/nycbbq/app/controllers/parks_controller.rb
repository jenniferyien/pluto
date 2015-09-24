class ParksController < ApplicationController

  def index
    @page = params[:page].to_i
    @parks = Park.limit(25).offset(@page*25)
  end

end
