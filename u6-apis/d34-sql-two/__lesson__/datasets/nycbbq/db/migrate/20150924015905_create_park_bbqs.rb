class CreateParkBbqs < ActiveRecord::Migration
  def change
    create_table :park_bbqs do |t|
      t.string :prop_id
      t.string :name
      t.string :location

      t.timestamps null: true
    end
  end
end
