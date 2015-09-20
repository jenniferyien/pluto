class Customer < ActiveRecord::Base
  belongs_to :dog
  has_secure_password
end
