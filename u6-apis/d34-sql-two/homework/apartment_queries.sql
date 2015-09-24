-- Create the DB
CREATE DATABASE real_estate;

-- Create A building has..
CREATE TABLE buildings (id SERIAL PRIMARY KEY, name VARCHAR, address VARCHAR, num_floors INTEGER);
-- Create An apartment has..
CREATE TABLE apartments (id SERIAL PRIMARY KEY, floor INTEGER, name VARCHAR, price INTEGER, sqft INTEGER, bedrooms INTEGER, bathrooms INTEGER, building_id INTEGER);
-- Create A tenant has..
CREATE TABLE tenants (id SERIAL PRIMARY KEY, name VARCHAR, age INTEGER, gender VARCHAR, apartment_id INTEGER);
-- Create A doorman has..
CREATE TABLE doormen (id SERIAL PRIMARY KEY, name VARCHAR, experience INTEGER, shift VARCHAR, building_id INTEGER);

-- Run the seeds file apartment_seeds.sql in order to load the data into the database.
psql -d real_estate -f apartment_seeds.sql

-- Retrieve all info on all tenants
SELECT * FROM tenants;
-- Retrieve the name, age, and gender of all tenants
SELECT name,age,gender FROM tenants;
-- Retrieve all info on all tenants older than 65
SELECT * FROM tenants WHERE age > 65;
-- Retrieve all info on all tenants in apartment with id 20
SELECT * FROM tenants WHERE apartment_id = 20;
-- Retrieve all info on all tenants in apartment with ids 20 or 21
SELECT * FROM tenants WHERE apartment_id = 20 OR apartment_id= 21;
-- Delete all tenants whose age is greater than 65
DELETE FROM tenants WHERE age > 65;
-- Change all doormen from building 3 to work night shifts.
UPDATE doormen SET shift = 'Night' WHERE building_id = 3;
-- Create one new tenant, put them in any apartment you want
INSERT INTO tenants(name,age,gender,apartment_id) VALUES('Jenn',26,'Female',8);
-- Find just the ids for all apartments for building with 2
SELECT id FROM apartments WHERE building_id = 2;
-- Find all info for apartments in building number 3 whose price is greater than $2300
SELECT * FROM apartments WHERE building_id = 3 AND price > 2300;
-- Geriatric Birthday! Update all tenants whose age is 90 to be 91
-- UNABLE TO UPDATE SINCE TENATS ALL AGE OLDER THAN 65 WAS DELETED IN PREVIOUS QUERY
UPDATE tenants SET age = 91 WHERE age = 90;
-- Change all tenants ages to increase by 1
UPDATE tenants SET age = age + 1;
-- Find all tenants who live in an apartment that costs more than $2300
SELECT * FROM tenants INNER JOIN apartments ON (tenants.apartment_id = apartments.id) WHERE price > 2300;

-- Demonstrate joining doormen with buildings
SELECT * FROM doormen INNER JOIN buildings ON (doormen.building_id = buildings.id);
-- Demonstrate joining buildings with apartments
SELECT * FROM buildings LEFT JOIN apartments ON (buildings.id = apartments.building_id);
-- Demonstrate joining apartments with tenants
SELECT * FROM apartments FULL OUTER JOIN tenants ON (apartments.id = tenants.apartment_id);
