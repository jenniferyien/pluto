
class Calculator

	def initialize(num_1, num_2)
		@num_1 = num_1
		@num_2 = num_2
	end

	def add
		"The sum of #{@num_1} + #{@num_2} = "+ (@num_1.to_f + @num_2.to_f).to_s
	end

	def subtract
		"The difference for #{@num_1} - #{@num_2} = "+ (@num_1.to_f - @num_2.to_f).to_s
	end

	def multiply
		"The product for #{@num_1} * #{@num_2} = "+ (@num_1.to_f * @num_2.to_f).to_s
	end

	def divide
		"The quotient for #{@num_1} / #{@num_2} = "+ (@num_1.to_f / @num_2.to_f).to_s
	end

	def power
		"#{@num_1} to the #{@num_2} power = "+ (@num_1.to_f ** @num_2.to_f).to_s
	end

	def squareRoot
		"The square root for #{@num_1} = "+ Math.sqrt(@num_1.to_f).to_s
	end

	def cubeRoot
		"The cube root for #{@num_1} = "+ Math.cbrt(@num_1.to_f).to_s
	end

end
