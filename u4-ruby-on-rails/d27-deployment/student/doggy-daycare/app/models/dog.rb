class Dog < ActiveRecord::Base
  has_many :customer
  BREED = ["Pinscher", "Terrier", "Dachshund", "Retreiver", "Poodle", "Toy", "Other"]

   validates :name, :age_months, :breed, :color, presence: true
   validates :breed, inclusion: { in: BREED }

end
