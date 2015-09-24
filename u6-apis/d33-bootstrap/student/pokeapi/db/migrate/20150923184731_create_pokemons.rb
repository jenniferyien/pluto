class CreatePokemons < ActiveRecord::Migration
  def change
    create_table :pokemons do |t|
      t.string :name
      t.string :resource_uri
      t.text :resource_data

      t.timestamps null: false
    end
  end
end
