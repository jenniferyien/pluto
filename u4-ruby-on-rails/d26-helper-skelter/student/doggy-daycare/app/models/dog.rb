class Dog < ActiveRecord::Base
  # def valid?
  #   name.present? && age_months.present?
  # end
  BREED = ['Pinscher', "Terrier", "Dachshund","Retreiver","Poddle","Toy", "Portuguese Water Dog","Other"]

  validates :name, :age_months, :breed, :color, presence: true
  validates :breed, inclusion: {in: BREED}
  # validates :name, presence: true
  # validates :age_months, presence: true
  # validates :breed, presence: true
  # validates :color, presence: true

end
