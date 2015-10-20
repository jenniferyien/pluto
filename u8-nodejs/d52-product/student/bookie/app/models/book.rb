class Book < ActiveRecord::Base
  validates :name, :source, presence: true
end
