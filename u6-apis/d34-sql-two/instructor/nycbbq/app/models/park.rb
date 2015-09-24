class Park < ActiveRecord::Base
  has_many :bbq_locations, foreign_key: 'prop_id', primary_key: 'prop_id'
end
