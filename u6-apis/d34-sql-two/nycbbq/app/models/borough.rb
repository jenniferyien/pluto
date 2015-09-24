class Borough < ActiveRecord::Base
  has_many :parks
  has_many :parkbbqs
end
