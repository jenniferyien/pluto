class WaterBottle

    def initialize(brand,capacity)
      @brand = brand
      @capacity = capacity

      @measure = 0;
    end

    attr_reader :brand, :capacity, :measure

    def empty?
      @measure == 0
    end

    def fill
      @measure = @capacity
    end

    def squirt
      if @fill == true
          # @fill = false
          @measure -=4
      else
        false
      end
    end


end
