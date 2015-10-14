class CreateParks < ActiveRecord::Migration
  def change
    create_table :parks do |t|
      t.string :prop_id
      t.string :name
      t.string :location
      t.string :zip

      t.timestamps null: true
    end
  end
end
