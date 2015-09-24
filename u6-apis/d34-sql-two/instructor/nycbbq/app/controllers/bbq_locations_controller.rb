class BbqLocationsController < ApplicationController
  def index
    @bbq_locations = BbqLocation.includes(:park)
  end
end
