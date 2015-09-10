class Blogger < ActiveRecord::Base

  has_many :blogs

  #comments posted by this blogger
  has_many :comments

  def say!
    puts slogan
  end

  def action
    puts "#{name} is sleeping"
  end

  # def blogs
  #   Blog.where(blogger_id: id)
  # end

end
