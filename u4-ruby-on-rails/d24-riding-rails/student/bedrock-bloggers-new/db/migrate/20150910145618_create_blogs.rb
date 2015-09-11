class CreateBlogs < ActiveRecord::Migration
  def change
    create_table :blogs do |t|
      t.references :blogger, index: true, foreign_key: true
      t.string :title
      t.text :content

      t.timestamps null: false
    end
  end
end
