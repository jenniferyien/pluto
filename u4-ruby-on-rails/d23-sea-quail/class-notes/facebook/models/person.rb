require 'pg'

$db = PG.connect(dbname: 'facebook')

class Person

  def self.find(id)
    person = $db.exec_params("SELECT * FROM people WHERE id = $1", [id]).first
    Person.new(person)
  end

  attr_reader :id, :first_name, :last_name, :birth_date, :friends_count, :city

  def initialize(options={})
    @id = options['id'].to_i
    @first_name = options['first_name']
    @last_name = options['last_name']
    @birth_date = Date.parse(options['birth_date'])
    @friends_count = options['friend_count']
    @city = options['city']
  end

  def full_name
    "#{@first_name} #{@last_name}"
  end

end
