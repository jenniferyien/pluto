require 'rails_helper'

RSpec.describe "blog/posts/show", type: :view do
  before(:each) do
    @blog_post = assign(:blog_post, Blog::Post.create!(
      :user => nil,
      :title => "Title",
      :body => "MyText"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(//)
    expect(rendered).to match(/Title/)
    expect(rendered).to match(/MyText/)
  end
end
