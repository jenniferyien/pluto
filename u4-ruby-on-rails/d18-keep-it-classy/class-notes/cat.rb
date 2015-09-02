class Cat

  def initialize(options={})
    @breed = options[:breed]
  end

  def speak
    if @breed == :persian
      puts "purr"
    else
      puts "meow"
    end
  end

end
