class Dog
  def initialize (options = {})
      @breed = options[:breed]
      @ears = options[:ears]
      @energy = options[:energy]
      @size = options[:size]
      @coat = options[:coat]
  end
  def self.random
     Dog.new({
       ear: [:drop_ear, :bat, :blunt].sample,
       energy: [:high, :medium, :low].sample,
       size: [:small, :medium, :large].sample,
       coat: [:single, :double, :hair].sample
     })
   end
end
