class CreateBloggers < ActiveRecord::Migration
  def change
    create_table :bloggers do |t|
      t.string :name
      t.string :login
      t.string :slogan
      t.string :password

      t.timestamps null: false
    end
  end
end
