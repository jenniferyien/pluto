require 'pg'

$db = PG.connect(dbname: 'facebook')

class Person

  def initialize(options = {})
    @id = options['id']
    @first_name = options['first_name']
    @last_name = options['last_name']
    @birthday = options['birthday']
  end

  def self.find(id)
    person = $db.exec_params('SELECT * FROM people WHERE id = $1',[id]).first
    Person.new(person)
  end

  def full_name
    "#{@first_name} #{@last_name}"
  end

  def age
      dob = Date.parse(@birthday)
      now = Time.now.utc.to_date
      now.year - dob.year - ((now.month > dob.month || (now.month == dob.month && now.day >= dob.day)) ? 0 : 1)
  end

  attr_reader :id, :first_name, :last_name, :birthday

end
