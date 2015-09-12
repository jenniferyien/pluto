class CheesesController < ApplicationController
  def index
    @cheeses = Cheese.all
  end

  def show
    @chee = Cheese.find(params[:id])
    @country = Country.all
  end

  def new
    @cheese = Cheese.new
  end

  def edit
    @cheese = Cheese.find(params[:id])
    @chee = Cheese.find(params[:id])
  end

  def create
    @cheese = Cheese.new(cheese_params)

    respond_to do |format|
      if @cheese.save
        format.html { redirect_to '/', notice: 'Cheese was successfully created.' }
        format.json { render :show, status: :created, location: @cheese }
      else
        format.html { render :new }
        format.json { render json: @cheese.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    set_cheese
      respond_to do |format|
        if @cheese.update(cheese_params)
          format.html { redirect_to '/', notice: 'Cheese was successfully updated.' }
          format.json { render :show, status: :ok, location: @cheese }
        else
          format.html { render :edit }
          format.json { render json: @cheese.errors, status: :unprocessable_entity }
        end
      end
    end

  def destroy
      set_cheese
      @cheese.destroy
      respond_to do |format|
        format.html { redirect_to '/', notice: 'Cheese was successfully destroyed.' }
        format.json { head :no_content }
      end
    end
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cheese
      @cheese = Cheese.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def cheese_params
      params.require(:cheese).permit(:name, :milk_type, :description, :image_url, :stank_level, :country_id)
    end

end
