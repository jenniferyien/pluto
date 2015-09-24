class ParkbbqsController < ApplicationController
  def index
    @bbqs = Parkbbq.eager_load(:park).joins(:park)
    # @bbqs = Parkbbq.joins(:park)
  end
end
