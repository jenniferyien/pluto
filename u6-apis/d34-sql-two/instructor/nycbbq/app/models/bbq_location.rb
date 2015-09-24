class BbqLocation < ActiveRecord::Base
  belongs_to :park, foreign_key: 'prop_id', primary_key: 'prop_id'
end
