class CreateCheeses < ActiveRecord::Migration
  def change
    create_table :cheeses do |t|
      t.string :name
      t.string :milk_type
      t.string :description
      t.string :image_url
      t.timestamp :create_at
      t.timestamp :updated_at
      t.integer :stank_level, default: 0
      t.references :country
    end
  end
end
