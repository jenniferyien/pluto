class CreateCharacters < ActiveRecord::Migration
  def change
    create_table :characters do |t|
      t.string :name
      t.string :gender
      t.string :quirk
      t.references :book, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
