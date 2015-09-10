require './db/config.rb'

class Blog

  attr_accessor :id, :title, :content, :blogger_id

  def self.all
    # SELECT * FROM blogs;
    results = $db.exec_params("SELECT * FROM blogs")
    results.map do |row|
      new(row)
    end
  end

  def self.find(id)
    # SELECT * FROM blogs WHERE id = $1
    result = $db.exec_params("SELECT * FROM blogs WHERE id = $1", [id])
    new(result.first)
  end

  def self.create(blogger, attributes)
    # INSERT INTO blogs
    # SET blogger_id = $1,
    #     title = $2,
    #     content = $3
    result = $db.exec_params("INSERT INTO blogs (blogger_id, title, content) VALUES ($1, $2, $3) RETURNING *", [blogger.id, attributes[:title], attributes[:content]])
    Blog.new(result.first)
  end

  def initialize(attributes={})
    @id = attributes['id'].to_i
    @blogger_id = attributes['blogger_id'].to_i
    @title = attributes['title']
    @content = attributes['content']
    # @created_at = Date.parse(attributes['created_at']) unless attributes['created_at'].nil?
  end

  def blogger
  end

end
