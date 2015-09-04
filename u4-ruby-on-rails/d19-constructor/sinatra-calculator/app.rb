# I have provided two solutions. the second one (the one that isn't refactored to include the Calculator class) is commented out below the refactored one.

# the server with using the Calculator class and switch statements

require_relative 'calculator'

module SinatraCalculator
  class Server < Sinatra::Base

    configure :development do
      register Sinatra::Reloader
    end

    get '/' do
      redirect '/calc'
    end

    get '/calc' do
      File.read('calc.html')
    end

    #adding two numbers
    get '/calc/add/:num1/:num2' do |num1, num2|
      calc = Calculator.new(num1,num2)
      calc.add
    end

    #subtracting two numbers
    get '/calc/subtract/:num1/:num2' do |num1, num2|
      calc = Calculator.new(num1,num2)
      calc.subtract
    end

    #multiplying two numbers
    get '/calc/multiply/:num1/:num2' do |num1, num2|
      calc = Calculator.new(num1,num2)
      calc.multiply
    end

    #dividing two numbers
    get '/calc/divide/:num1/:num2' do |num1, num2|
      calc = Calculator.new(num1,num2)
      calc.divide
    end

    #Exponent a number
    get '/calc/power/:num1/:num2' do |num1, num2|
      calc = Calculator.new(num1,num2)
      calc.power
    end

    #square rooting a number
    get '/calc/squareRoot/:num1' do |num1|
      calc = Calculator.new(num1,{})
      calc.squareRoot
    end

    #cube rooting a number
    get '/calc/cubeRoot/:num1' do |num1|
      calc = Calculator.new(num1,{})
      calc.cubeRoot
    end


  end #end class
end #end module
