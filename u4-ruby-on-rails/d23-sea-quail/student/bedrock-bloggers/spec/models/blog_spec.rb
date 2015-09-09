require 'ffaker'
require 'spec_helper'
require './models/blog'

RSpec.describe Blog do

  def create_blogger
    Blogger.create({
      name: 'Fred Flintstone',
      slogan: 'Yabba-Dabba-Doo!',
      login: 'fred',
      password: 'flintstone'
    })
  end

  def create_blog(blogger=nil)
    blogger ||= create_blogger
    Blog.create(blogger, {
      title: FFaker::BaconIpsum.sentence,
      content: '<p>'+FFaker::BaconIpsum.paragraphs(6).join('</p><p>')+'</p>'
    })
  end

  it "creates blogs" do
    blog = create_blog
    expect(blog).to be_a Blog
    expect(blog.id).to be_an Integer
  end

  it "finds blogs" do
    new_blog = create_blog
    expect(new_blog.id).to be_an(Integer),
      'please fix "Blog creates blogs"'
    found_blog = Blog.find(new_blog.id)
    expect(found_blog.id).to be_an Integer
    expect(found_blog).to be_a Blog
  end

  it "gets all blogs" do
    blogger = create_blogger
    new_blog_ids = [create_blog(blogger).id, create_blog(blogger).id, create_blog.id]
    expect(new_blog_ids).not_to include(nil),
      'please fix "Blog creates blogs"'
    found_ids = Blog.all.map(&:id)
    expect(found_ids).to include(*new_blog_ids)
    expect(found_ids).not_to include(nil)
  end

end
