class Park < ActiveRecord::Base
  has_many :parkbbqs, foreign_key: 'prop_id', primary_key: 'prop_key' 
end
