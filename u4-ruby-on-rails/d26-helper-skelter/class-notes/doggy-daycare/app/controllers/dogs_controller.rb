class DogsController < ApplicationController

  before_action :set_dog, only: [:show, :edit, :update]

  def new
    @dog = Dog.new  # NilObject
  end


  def create
    dog_params = params.require(:dog).permit(:name, :age_months, :breed, :color, :tagged)
    @dog = Dog.new(dog_params)
    if @dog.valid?
      # EVERYTHING IS GREAT PATH
      @dog.save
      redirect_to dog_url(@dog)
    else
      # SOMETHING IS WRONG PATH
      @message = "Dog name cannot be blank!"
      render :new
    end
  end

  def show
  end

  def edit
  end

  def destroy
    @dog.destroy
  end

private

  def set_dog
    @dog = Dog.find(params[:id])
  end


end
