class Borough < ActiveRecord::Base
  has_many :parks
  has_many :bbq_locations
end
