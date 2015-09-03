# methods to look up
# Array#split
# Array#join
# Enumerable#with_index
# Array#map
# Array#map!
# Integer#odd?
# Enumerable#inject http://ruby-doc.org/core-2.2.0/Enumerable.html#method-i-inject

class Luhn

  def self.valid?(number)
    # .split() is a string method, so we convert the number first
    # then we reverse the array for iteration
    arr = number.to_s.split('').reverse

    arr.map! { |num| num.to_i } # turns them back into integers IN PLACE

    modded_arr = arr.map.with_index do | num, id |
      if id.odd? # double every odd INDEX
        num * 2
      else # every other number gets put back
        num
      end
    end

    # when we .join() an array it turned the numbers into strings automatically, try this in pry! this separates all double digit numbers into their own indices
    single_digits = modded_arr.join.split('')

    single_digits.map! { |num| num.to_i } # turns them into ints again IN PLACE

    sum = single_digits.inject(:+) # adds them all

    sum % 10 == 0 # implicit return

  end

end # Luhn


