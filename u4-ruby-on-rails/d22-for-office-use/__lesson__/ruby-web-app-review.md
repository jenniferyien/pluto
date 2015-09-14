# Ruby Web App Review

## Learning Objectives
* Build a Sinatra app more comfortably
* Combine knowledge of Sinatra with Postgres DB through the PG gem
* Utilize ERB Layouts to DRY up views
* Create and Read records from the DB through Sinatra

## Sinatra
A light weight framework that is based on Ruby. We could use it more quickly build web apps.

  ### Web App at a High Level - We do _(5m)_
  Last week we built a v0.0.1 of our Facebook app. It gave us a nice introductory tour to Sinatra. What do you think are the different components necessary to build a web app like FB? (Draw these different components on the board)
    * HTML and CSS
    * Hosting service
    * Server
    * Routes
    * Database (Postgres)
    * Templating engine (ERB)

  ### File structure - I do _(5m)_
    facebook
      public
        - styles
        - images
      views
        - html/erb
      facebook_app.rb
      config.ru
      Gemfile
      Gemfile.lock

  ### Tour of Sinatra - We do _(10m)_
  Will go inside out
    * facebook_app.rb
      * Where we setup routes
      * Specified ERB template to be rendered based on routes
      * Provided instance variables to ERB templates
      * Could Query DB for data and provide it to ERB templates via instance variables
    * views
      * Based on route a template will be rendered

  That is what we have done so far with Sinatra. We could do much more than just display pages. The same way that data could be quried from the DB, writing to the DB is also possible.

## Database Review - I do _(10m)_
We are using Postgres which is a flavor of SQL (Structured Query Language).
  * To use Postgres we go to our terminal and type `psql`
  * In our `psql` shell we have a bunch of commands to inspect our DB
    * `\l ` list all databases
    * `\c` connect to a databases
    * `\dt` list all tables in a databases
    * 'CREATE DATABASE [name];'
    * 'DROP DATABASE [name];'

  * In a DB we created we could do somethings as well
    * `CREATE TABLE people (id SERIAL UNIQUE PRIMARY KEY NOT NULL,
                            first_name TEXT NOT NULL,
                            last_name TEXT NOT NULL);`
      **NOTE:** `user` is a reserved word in psql
      WHy might we want to declare an id column for our People table?

## Create a new Database - You do _(10m)_
  * Open `psql` and create a new `facebook` database, if one already exist delete it.
  * In the `facebook` database create a new table called `people` with the following fields
    * id - primary key
    * first_name
    * last_name

## Insert people into the Database - I do _(5m)_
  * `INSERT INTO people (first_name, last_name) VALUES ('Pan', 'Wangperawong');`

## Students insert people into the Database - You do _(10m)_
  * Ask students to insert some people into the db and check that the insert was successful

## Rerun our facebook app - We do _(5m)_
  * Nothing new. Now we are back to where we were last week.

## Do string interpolation for first and last name - I do _(5m)_
  * Point out that this is a good example of why I use single quote for none interpolated string

## Ask student to create a profile page and route for it - You do _(5m)_
  * Point out that it would be nice if there was a navbar to get to different pages rather than having to change the route all the time

## Ask students to add a navbar that matches Facebook - You do _(10m)_
  * Add brand
  * Add links to different pages
  * Ask students how they implemented the navbar on the people page and the profile page

## Review how to write the /profile route - I do _(5m)_
  * Since we only want one record we have to ensure that we only get the first record

## Introduce to students the ability to create layouts - I do _(10m)_
  * Point out redundancy of markup, which is not DRY
  * Tell students to just observer me create new main_layout.erb and update routes

## Let students DRY up their code with layouts - You do _(15m)_
  * Go around class to make sure students know what to do

## From viewing my profile page you know nothing about me - I do _(10m)_
  * Introduce Atler table to add about me column to people
  * Ask them to watch me first then they'll have a chance to do it
  * `ALTER TABLE people ADD about_me TEXT;`

## Let students add about me and update it - You do _(10m)_
  * Ask students to add new column called about_me
  * Afterwards ask them to update the about_me column with some information about themselves
  * `UPDATE people SET about_me='I am awesome!!!' WHERE first_name='Pan';`

# Closing
  * Today we reviewed how to build a Sinatra app with Postgres DB
  * Then we reviewed SQL and learned how to add new table columns
  * Finally we learned how to DRY up our ERB layouts


<!-- ## That's not very personalized - You do _(15m)_
  * Write a more personalized profile route
  * Move new route above and mention that it is good practice to order routes from specific to general in this case it doesn't matter because they are both really specific
  * Ask students to update profile nav link
  * Ask student to update link to display /pan -->
