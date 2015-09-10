require './db/config.rb'

class Blog

  attr_accessor :id, :title, :content, :blogger_id

  def self.all
    blog = $db.exec_params('SELECT * FROM blogs')
    blog.map {|attr| new(attr) }
  end

  def self.find(id)
    blog = $db.exec_params("SELECT * FROM blogs WHERE id IN ($1)",[id]).first
    new(blog)
  end

  def self.create(blogger, attributes)
    blog = $db.exec_params("INSERT INTO blogs(blogger_id,title,content) VALUES ($1,$2,$3) RETURNING *", [blogger.id,attributes[:title],attributes[:content]]).first
    new(blog)
  end

  def initialize(options = {})
    @id = options['id'].to_i
    @blogger_id = options['blogger_id'].to_i
    @title = options['title']
    @content = options['content']
  end

  def blogger
    Blogger.find(blogger_id)
  end

end
