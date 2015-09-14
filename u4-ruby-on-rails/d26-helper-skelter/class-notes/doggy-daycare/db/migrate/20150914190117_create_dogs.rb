class CreateDogs < ActiveRecord::Migration
  def change
    create_table :dogs do |t|
      t.string :name
      t.string :age_months
      t.string :breed
      t.string :color
      t.boolean :tagged

      t.timestamps null: false
    end
  end
end
