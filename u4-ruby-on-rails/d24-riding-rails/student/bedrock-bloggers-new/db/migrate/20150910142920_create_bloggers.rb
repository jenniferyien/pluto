class CreateBloggers < ActiveRecord::Migration
  def change
    create_table :bloggers do |t|
      t.string :name
      t.string :logan
      t.string :password
      t.text :slogan

      t.timestamps null: false
    end
  end
end
