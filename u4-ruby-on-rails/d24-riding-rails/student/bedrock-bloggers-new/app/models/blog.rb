class Blog < ActiveRecord::Base
  belongs_to :blogger
<<<<<<< HEAD

  #all of the comments from all the bloggers to this blog
  has_many :comments
=======
>>>>>>> 56cf2f5bb562c006994b5768923b86f3e11c2362
end
