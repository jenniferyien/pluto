class Comment < ActiveRecord::Base
  belongs_to :blogger
  belongs_to :blog
end
