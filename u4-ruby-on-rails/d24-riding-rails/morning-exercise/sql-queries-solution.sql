-- All Columns for all players from the New York Knicks (NYK)
SELECT *
FROM players
WHERE team = 'NYK';

-- All Columns for all players from the Indiana Pacers (IND) who are under 26 years old
SELECT *
FROM players
WHERE team = 'IND'
AND age < 26;

-- All columns for all players, ordered from least points scored to most points scored 
SELECT * 
FROM players
ORDER BY points DESC;

-- Name and points per game (points/games), for the players with the top 20 points per game
SELECT name, (points/games) AS ppg
FROM players
ORDER BY (points/games) DESC
LIMIT 20;

-- The average age for all players 
SELECT avg(age) AS avg_age
FROM players;

-- The average age for all players on the Oklahoma City Thunder (OKC)
SELECT avg(age) AS avg_age_OKC
FROM players
WHERE team = 'OKC';

-- The average age for all of the players who've played more than 40 games
SELECT avg(age) AS avg_age_for_over_40_gp
FROM players 
WHERE games > 40;