class AddsCurrentHpToPokemon < ActiveRecord::Migration
  def change
    add_column :pokemons, :current_hp, :integer
  end
end
