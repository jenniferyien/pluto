RestClient.proxy = 'http://localhost:49368'

class Pokemon < ActiveRecord::Base
  serialize :resource_data

  def self.fetch
    response = RestClient.get "http://pokeapi.co/api/v1/pokedex/1/"
    pokedex = JSON.parse(response)["pokemon"]
    pokedex.each do |pokemon|
        Pokemon.find_or_create_by!({
          name: pokemon['name'],
          resource_uri: pokemon['resource_uri']
          })
    end
  end

  def fetch
      response = RestClient.get "http://pokeapi.co/#{resource_uri}"
      # self.resource_data = JSON.parse(response)
      # self.save
      update(resource_data: JSON.parse(response))
  end

  def types
    resource_data["types"]
  end

  def weight
    resource_data["weight"]
  end

  def height
    resource_data["height"]
  end

  def primary_type
    resource_data["types"][0]
  end

  def hp
    resource_data["hp"]
    # update(current_hp: hp)
  end

  def attack
    resource_data["attack"]
  end

  def speed
    resource_data["speed"]
  end

  def abilities
    resource_data["abilities"]
  end

  def battle!(enemy)

    if self.speed > enemy.speed
      enemyHP = enemy.current_hp - self.attack
      me = self.current_hp
      puts "Enemy: #{enemyHP} My: #{me} "
    else
      myHP = self.current_hp - enemy.attack
      enemy = enemy.current_hp
      puts "Enemy: #{enemy} My: #{myHP} "
    end
    if enemy.current_hp == 0
      puts "Enemy fainted!"
    else self.current_hp == 0
      puts "I fainted! Hurry to the Pokemon Center"
    end

  end
end
