
class Calculator

	def initialize(num_1, num_2)
		@num_1 = num_1
		@num_2 = num_2
	end

	def add
		"The sum of #{@num_1} + #{@num_2} = "+ (@num_1.to_f + @num_2.to_f).to_s
	end

	def subtract
		'Difference: '+ (@num_1.to_f - @num_2.to_f).to_s
	end

	def multiply
		'Product: '+ (@num_1.to_f * @num_2.to_f).to_s
	end

	def divide
		'Quotient: '+ (@num_1.to_f / @num_2.to_f).to_s
	end

	def power
		'Power: '+ (@num_1.to_f ** @num_2.to_f).to_s
	end

	def squareRoot
		'squareRoot: '+ Math.sqrt(@num_1.to_f).to_s
	end

	def cubeRoot
		'cubeRoot: '+ Math.cbrt(@num_1.to_f).to_s
	end

end
