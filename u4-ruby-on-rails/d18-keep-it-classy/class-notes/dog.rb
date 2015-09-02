module Animals

  class Dog
    def initialize(options={})
      @ear = options[:ear]
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

    attr_reader :ear, :energy, :size, :coat

  end
end
