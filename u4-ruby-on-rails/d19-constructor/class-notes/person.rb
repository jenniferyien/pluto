class Person

  # - With an options Hash
  # def initialize(options={})
  #   @first_name = options[:first_name]
  #   @last_name = options[:last_name]
  #   @age = age
  # end

  # - Using Keyword Arguments
  # def initialize(first_name: nil, last_name: nil, age: nil)
  #   @first_name = first_name
  #   @last_name = last_name
  #   @age = age
  # end

  def initialize(first_name, last_name, age)
    @first_name = first_name
    @last_name = last_name
    @age = age
  end

  def full_name
    [@first_name, @last_name].join(' ')
  end

  def greeting
    "Hello #{full_name}"
  end
end
