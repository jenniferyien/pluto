require 'rails_helper'

RSpec.describe "blog/posts/new", type: :view do
  before(:each) do
    assign(:blog_post, Blog::Post.new(
      :user => nil,
      :title => "MyString",
      :body => "MyText"
    ))
  end

  it "renders new blog_post form" do
    render

    assert_select "form[action=?][method=?]", blog_posts_path, "post" do

      assert_select "input#blog_post_user_id[name=?]", "blog_post[user_id]"

      assert_select "input#blog_post_title[name=?]", "blog_post[title]"

      assert_select "textarea#blog_post_body[name=?]", "blog_post[body]"
    end
  end
end
