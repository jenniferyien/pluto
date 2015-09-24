class CreateBoroughs < ActiveRecord::Migration
  def change
    create_table :boroughs do |t|
      t.string :code
    end
  end
end
