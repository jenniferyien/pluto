class Blogger < ActiveRecord::Base
<<<<<<< HEAD

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

=======
  has_many :blogs
>>>>>>> 56cf2f5bb562c006994b5768923b86f3e11c2362
end
