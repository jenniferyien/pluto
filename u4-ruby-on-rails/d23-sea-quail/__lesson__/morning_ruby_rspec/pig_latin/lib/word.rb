class Word
  def initialize(word)
    @word = word
  end

  def to_pig
    if @word[0].downcase.start_with? 'a','e','i','o','u'
      @word + "way"
    else # test this out in pry
      word   = @word
      suffix = word.split(/[aeioy]/).first
      if suffix.length > 1
        word.sub! suffix, ""
        word + suffix + "ay"
      else
        word  += word.slice!(0) + 'ay'
      end
    end
  end

end
