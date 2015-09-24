class Pokemon < ActiveRecord::Base
  serialize :resource_data, JSON

  attr_writer :health
  def health
    @health ||= hp
  end

  # pry> Pokemon.fetch
  def self.fetch
    text_content = RestClient.get('http://pokeapi.co/api/v1/pokedex/1/')
    json_content = JSON.parse(text_content)
    pokemons = json_content["pokemon"]
    pokemons.each do |pokemon|
      Pokemon.find_or_create_by!({
        name: pokemon["name"],
        resource_uri: pokemon["resource_uri"]
      })
    end
  end

  # MORE INFORMATION ABOUT A SINGLE POKEMON
  def fetch
    text_content = RestClient.get("http://pokeapi.co/#{resource_uri}")
    json_content = JSON.parse(text_content)
    update(resource_data: json_content)
  end

  def hp
    resource_data["hp"]
  end

  def speed
    resource_data["speed"]
  end

  def attack
    resource_data["attack"]
  end

  def defense
    resource_data["defense"]
  end

  def battle!(enemy)
    if self.speed > enemy.speed
      self.attack!(enemy)
      enemy.attack!(self) if enemy.health > 0
    else
      enemy.attack!(self)
      self.attack!(enemy) if self.health > 0
    end
    if enemy.health <= 0
      puts "enemy #{enemy.name} fainted"
    elsif self.health <= 0
      puts "your #{self.name} fainted"
    else
      puts "next round"
    end
  end

  def attack!(enemy)
    enemy.health -= (self.attack - enemy.defense)
  end

end
