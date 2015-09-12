class CountriesController < ApplicationController
  def index
    $cheeses = Cheese.all
    @countries = Country.all
  end

  def show
    @country = Country.find(params[:id])
    @cheese = Cheese.all
  end
end
