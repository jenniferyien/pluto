# Afternoon SQL reps!

<<<<<<< HEAD
![NYK Historical Moment](http://38.media.tumblr.com/e18de6a5234322bfa3e3f3718a7f7a1c/tumblr_mhdrol7U281r9ngjbo1_500.gif)<br>
_(If you don't recognize this dunk, you're not a real Knicks fan)_
# Setup
=======
![NYK Historical Moment](http://38.media.tumblr.com/e18de6a5234322bfa3e3f3718a7f7a1c/tumblr_mhdrol7U281r9ngjbo1_500.gif)

# Setup

>>>>>>> 5e64313a088ce82e7d6741777a5f72c5e04c21a7
Using the files provided(`nba_season_2011-12.csv` & `seeds.sql`) while working in the correct directory do the following:
<br>
Using the `pwd` command, find the path to your current working directory, copy the path, and paste it into `seeds.sql` on line 17 so it should say something along the lines of
<br>
`FROM '/Users/Bobby_King/code/wdi/pluto/u4-ruby-on-rails/d24-riding-rails/morning-exercise/nba_season_2011-12.csv'`
<br>
*(Note: this is the path on MY computer, not yours so don't use that exact path)*
Once that file has been modified, run this line from your terminal:
<br>
-`createdb nba_db`<br>
-`psql -d nba_db -f seeds.sql`<br>
Navigate to your nba_db using the PSQL CLI and then move onto the exercise.

<<<<<<< HEAD
## Completion

Complete all **AND** at least 1 of the Bonus

=======
>>>>>>> 5e64313a088ce82e7d6741777a5f72c5e04c21a7
## Activity

Keeping track of your answers (and the SQL query that gave you the answer) in a file called `nba_queries.sql`, figure out the appropriate SQL commands to return the following:

1. All columns for all players from the New York Knicks (NYK).
<<<<<<< HEAD
1. All columns for all players from the Indiana Pacers (IND) who are under 26 years old.
=======
1. All columns for all players from the Indiana Packers (IND) who are under 26 years old.
>>>>>>> 5e64313a088ce82e7d6741777a5f72c5e04c21a7
1. All columns for all players, ordered from least points scored to most points scored.
1. Name and Points per game (points/games), for the players with the top 20 points per game.
1. The average age for all players.
1. The average age for all players on the Oklahoma City Thunder (OKC).
1. The average age for all players who played more than 40 games.
<<<<<<< HEAD

## Bonus
1. The team and total points scored from all players on that
team (team points) ordered from most team points to least.
1. The age and the average points per game for that age, ordered from oldest to youngest for all ages.
1. The team and the the number of players who score above 12 points per game on that team, ordered from the most number of players to the least number of players.
=======
>>>>>>> 5e64313a088ce82e7d6741777a5f72c5e04c21a7
