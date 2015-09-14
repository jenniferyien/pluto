# WEEKEND WARRIORS

Now that we know all this stuff about ruby, were going to create a simple command line rpg. This is going to be very similar to when we created a pokemon game. 

## The Players

* There will be a hero who has four things:
  * health points (hp): his/her health
  * damage: The amount of damage s/he does
  * attack: the chance s/he will hit
  * evasion: a rating to represent how shifty s/he is
* There will be an array of enemies that will have the same stats as the hero (make at least 3 enemies). The enemies should be slightly different from each other. Examples:
  * one enemy has a lot of health but a very small attack
  * one enemy has high damage but very low attack


## The Game Method

* An enemy is randomly 'sampled' from the array. Remove this enemy from the array.
* The enemy then fights the hero (the fight method)
* if the hero wins, another enemy is sampled and removed and we repeat the sequence.
* This sequence gets repeated UNTIL:
  * the hero is dead and the hero is defeated
  * all the enemies are defeated and the hero loses

## The Fight Method

Make sure to show what is going on in the fight by puts'ing out the hits/misses/deaths/wins

* The hero always attacks first
* determine if the hero scores a hit
  * get a random number between 0 and 100 (check the docs to see how you can get a random number)
  * determine the hit percentage by calculating the following formular:
    * ( (attack value of attacker) / (evasion value of vitctim) ) * 10
  * if the random number is lower than the hit percentage, the hero misses
* if the hero lands a hit: 
  * reduce the health of the enemy
* check to see if the enemy is dead
  * if the enemy has 0 or less health, return true
* the enemy attacks next if he is still alive
* determine if the enemies scores a hit
  * get a random number between 0 and 100 (check the docs to see how you can get a random number)
  * determine the hit percentage by calculating the following formular:
    * ( (attack value of attacker) / (evasion value of vitctim) ) * 10
  * if the random number is lower than the hit percentage, the enemy misses
* if the enemy hits:
  * reduce the health of the hero
* check if the hero is still alive
  * if the hero has 0 or less health, return false
* repeat the sequence until something is returned

## Super Bonuses

* Make it never ending (dont remove enemies from array). Instead of the hero 'winning', you print out how many battles the hero won until s/he was defeated.
* Give the hero a level and experience. Everytime a player gets a certain amount of experience (from fighting an enemy), 'level' him up by giving him better stats. If the hero gets to level 10, the hero wins.
* Allow the hero to choose whether or not to fight or run from an enemy. (maybe its not a 100% chance to run?)
* "scale" the enemies based on the heroes level (they get harder as the hero levels)