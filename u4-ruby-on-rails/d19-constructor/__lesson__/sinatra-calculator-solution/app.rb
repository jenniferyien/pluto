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
      "<h1>Hi there, welcome to the Sinatra Calculator, for all your calculating needs.<h1>"
    end

    get '/calc/greeting/:name' do
      name = params["name"]
      "<h1> Hello, #{name}! <h1>"
    end

    get '/calc/:operation/:x/:y' do
      x = params["x"]
      y = params["y"]
      operation = params["operation"]
      calculator = Calculator.new

      case operation
      when 'add'
        total = calculator.add(x, y)
        "<h1>Sum: #{total}<h1>"
      when 'subtract'
        total = calculator.subtract(x, y)
        "<h1>Difference: #{total}<h1>"
      when 'multiply'
        total = calculator.multiply(x, y)
        "<h1>Product: #{total}<h1>"
      when 'divide'
        total = calculator.divide(x, y)
        "<h1> Quotient: #{total}<h1>"
      else
        "<h1>#{operation} is not a valid option. Try again, dummy!<h1>"
      end
    end

    get '/calc/:operation/:x' do
      x = params["x"].to_f
      operation = params["operation"]
      calculator = Calculator.new

      case operation
      when 'square'
        total = calculator.square(x)
        "<h1>Square: #{total}<h1>"
      when 'cube'
        total = calculator.cube(x)
        "<h1>Cube: #{total}<h1>"
      when 'sqrt'
        total = calculator.sqrt(x)
        "<h1>Square Root: #{total}<h1>"
      else
        "<h1>#{operation} is not a valid option, silly!<h1>"
      end
    end

  end
end


# the server without the Calculator class, and without switch statements


# require_relative 'calculator'

# module SinatraCalculator
#   class Server < Sinatra::Base

#     configure :development do
#       register Sinatra::Reloader
#     end

#     get '/' do
#       redirect '/calc'
#     end

#     get '/calc' do
#       "<h1>Hi there, welcome to the Sinatra Calculator, for all your calculating needs.<h1>"
#     end

#     get '/calc/greeting/:name' do
#       name = params["name"]
#       "<h1> Hello, #{name}! <h1>"
#     end

#     get '/calc/add/:x/:y' do
#       x = params["x"].to_f
#       y = params["y"].to_f
#       sum = x + y
#       "<h1>Sum: #{sum}<h1>"
#     end

#     get '/calc/subtract/:x/:y' do
#       x = params["x"].to_f
#       y = params["y"].to_f
#       difference = x - y
#       "<h1>Difference: #{difference}<h1>"
#     end

#     get '/calc/multiply/:x/:y' do
#       x = params["x"].to_f
#       y = params["y"].to_f
#       product = x * y
#       "<h1>Product: #{product}<h1>"
#     end

#     get '/calc/divide/:x/:y' do
#       x = params["x"].to_f
#       y = params["y"].to_f
#       quotient = x / y
#       "<h1>Quotient: #{quotient}<h1>"
#     end

#     get '/calc/square/:x' do
#       x = params["x"].to_f
#       square = x * x
#       "<h1>Square: #{square}<h1>"
#     end

#     get '/calc/cube/:x' do
#       x = params["x"].to_f
#       cube = x ** 3
#       "<h1>Cube: #{cube}<h1>"
#     end

#     get '/calc/sqrt/:x' do
#       x = params["x"].to_f
#       sqrt = Math.sqrt(x)
#       "<h1>Square root: #{sqrt}<h1>"
#     end

#   end
# end

