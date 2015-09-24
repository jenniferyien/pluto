class CreateBbqLocations < ActiveRecord::Migration
  def change
    create_table :bbq_locations do |t|
      t.string :prop_id
      t.string :name
      t.string :location

      t.timestamps
    end
  end
end
