class DogsController < ApplicationController

  before_action :set_dog, only: [:show, :edit, :update]
  def set_dog
    @dog = Dog.find(params[:id])
  end

  def new
    @dog = Dog.new
  end

  def create
    dog_params = params.require(:dog).permit(:name, :age_months, :breed, :color, :tagged)
    @dog = Dog.new(dog_params)
    if @dog.valid?
      @dog = Dog.save
      redirect_to dog_url(@dog)
      # redirect_to '/dogs/#{@dog.id}'
    else
      # @message = 'Dog name cannot be blank!'
      render :new
    end
    # if params[:dog][:name].blank? || params[:dog][:age_months].blank?
    #     @message = 'Dog name cannot be blank!'
    #     render :new
    # else
    #     @dog = Dog.save
    #     redirect_to dog_url(@dog)
    #     # redirect_to '/dogs/#{@dog.id}'
    # end
  end

  def show
    @dog = Dog.find(params[:id])
  end


end
