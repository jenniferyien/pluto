class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :name
      t.string :format
      t.integer :width
      t.integer :height
      t.timestamp :processed_at

      t.timestamps null: false
    end
  end
end
