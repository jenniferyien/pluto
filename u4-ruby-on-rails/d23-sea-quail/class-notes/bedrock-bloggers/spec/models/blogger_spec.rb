require "spec_helper"
require "./models/blogger"

RSpec.describe Blogger do

  def create_blogger
    Blogger.create({
      name: 'Fred Flintstone',
      slogan: 'Yabba-Dabba-Doo!',
      login: 'fred',
      password: 'flintstone'
    })
  end

  it "creates bloggers" do
    blogger = create_blogger
    expect(blogger).to be_a Blogger
    expect(blogger.id).to be_an Integer
    expect(blogger.name).to eq 'Fred Flintstone'
    expect(blogger.slogan).to eq 'Yabba-Dabba-Doo!'
    expect(blogger.login).to eq 'fred'
    expect(blogger.password).to eq 'flintstone'
  end

  it "finds bloggers" do
    new_blogger = create_blogger
    expect(new_blogger.id).to be_an(Integer),
      'please fix "Blogger creates bloggers"'
    found_blogger = Blogger.find(new_blogger.id)
    expect(found_blogger.id).to be_an Integer
    expect(found_blogger.id).to be new_blogger.id
  end

  it "gets all bloggers" do
    new_blogger_ids = [create_blogger.id, create_blogger.id, create_blogger.id]
    expect(new_blogger_ids).not_to include(nil),
      'please fix "Blogger creates bloggers"'
    found_ids = Blogger.all.map(&:id)
    expect(found_ids).to include(*new_blogger_ids)
    expect(found_ids).not_to include(nil)
  end

  it "has many blogs" do
    blogger = create_blogger
    expect(blogger.id).to be_an(Integer),
      'please fix "Blogger creates bloggers"'
    Blog.create(blogger, {
      title: FFaker::BaconIpsum.sentence,
      content: '<p>'+FFaker::BaconIpsum.paragraphs(6).join('</p><p>')+'</p>'
    })
    blogs = blogger.blogs
    expect(blogs).to be_an Array
    expect(blogs.first).to be_a Blog
    expect(blogs.first.blogger_id).to be blogger.id
  end

end
