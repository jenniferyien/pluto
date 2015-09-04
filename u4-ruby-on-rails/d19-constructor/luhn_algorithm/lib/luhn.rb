# Write your Luhn class here
class Luhn
  def self.valid?(number)
    array_of_num = number.to_s.split('').reverse.map.with_index {|num,index|
            if index.odd?
              num.to_i * 2
            else
              num
            end
    }

    new_array_num = array_of_num.join.split('')
    card_sum = 0

    new_array_num.each {|num|
      card_sum += num.to_i
    }

    card_sum % 10 == 0
  end
end

# Luhn.valid?(1234567890123456)
