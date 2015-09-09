require './db/config.rb'

class Blog

  attr_accessor :id, :title, :content

  def self.all
    []
  end

  def self.find(id)
    new
  end

  def self.create(blogger, attributes)
    new
  end

  def blogger
  end

end
