require './db/config.rb'
require './models/blog'

class Blogger
  attr_accessor :id, :name, :slogan, :login, :password

  def self.all
    result = $db.exec("SELECT * FROM bloggers")
    result.map do |attributes|
      new(attributes)
    end
  end

  def self.find(id)
    result = $db.exec_params("SELECT * FROM bloggers WHERE id = $1", [id])
    new(result.first)
  end

  def self.create(attributes)
    result = $db.exec_params(
      "INSERT INTO bloggers (name, slogan, login, password, created_at) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [attributes[:name], attributes[:slogan], attributes[:login], attributes[:password], Time.now]
    )
    new(result.first)
  end

  def initialize(attributes=nil)
    if attributes
      @id = attributes["id"].to_i
      @name = attributes["name"]
      @slogan = attributes["slogan"]
      @login = attributes["login"]
      @password = attributes["password"]
    end
  end

  def to_param
    name.downcase.gsub(/\W+/,'-')
  end

  #ALL OF THE BLOGGER'S BLOGS
  def blogs
    # SELECT * FROM blogs WHERE blogger_id = $1
    results = $db.exec_params("SELECT * FROM blogs WHERE blogger_id = $1", [@id])
    results.map do |row|
      Blog.new(row)
    end
  end

end
