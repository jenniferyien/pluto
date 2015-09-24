class CreateParkbbqs < ActiveRecord::Migration
  def change
    create_table :parkbbqs do |t|
      t.string :prop_id
      t.string :name
      t.string :location

      t.timestamps
    end
  end
end
