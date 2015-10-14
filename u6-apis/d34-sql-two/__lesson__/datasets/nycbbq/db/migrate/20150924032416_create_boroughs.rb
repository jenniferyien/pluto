class CreateBoroughs < ActiveRecord::Migration
  def change
    create_table :boroughs do |t|
      t.string :code
      t.string :name

      t.timestamps null: true
    end
    add_reference :parks, :borough, index: true
  end
end
