class AddMissingResourceDataToPokemon < ActiveRecord::Migration
  def change
    add_column :pokemons, :resource_data, :text
  end
end
