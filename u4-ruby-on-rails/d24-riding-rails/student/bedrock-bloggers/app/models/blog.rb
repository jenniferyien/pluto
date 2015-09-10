class Blog < ActiveRecord::Base
  belongs_to :blogger

  #all of the comments from all the bloggers to this blog
  has_many :comments
end
