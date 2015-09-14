# The Ruby-Powered Shopping Spree

<img src="https://ga-core.s3.amazonaws.com/production/uploads/instructor/image/1722/thumb_DSC_6771.JPG" height="200px" width="200px" style="margin: 0 auto;">

The Year is 2015, and Pan Wangperawong is shopping like a madman. As his family accountant, you must make the appropriate changes to the `shopping_db` database that tracks his purchases. Thankfully, you can update your postgres database with your favorite programming language using the powerful 'pg' gem.

## Learning Objectives

- Reps with the PG gem
- Writing dynamic queries using `exec_params`
- Becoming seasoned documentation hunters

## Completion

Completion for this assignment is part 3. Try not to overdo it, more is better, but healthy living is best.

To test your code. Run your program for each part, by typing 'ruby ruby_powered_shopping_spree.rb' and check your changes by querying the database.

## Setup

1. Run the command `createdb shopping_db` in terminal.
1. While still in terminal, run the command `psql -d shopping_db -f seeds.sql` from within the `ruby_powered_shopping_spree` directory.
1. Take a look into `seeds.sql` if you need reference. Another option is to connect to the database itself and query the tables to see your data.

#### Part 1 - Configuring Your Connection

1. Read over this [PG Gem Cheatsheet](https://gist.github.com/vanderhoop/be32262c0cf1bf8ac29d) written by your grand-teacher [Travis Vander Hoop](https://generalassemb.ly/instructors/travis-vander-hoop/2218).
1. Within your `ruby_powered_shopping_spree.rb` file, bring in the pg gem to gain access to the `PG` class. Then open a connection to your `shopping_db` database. Store the connection in the variable `pg_conn`.

#### Part 2 - Inserting Random Purchases

1. Initialize a variable called `insert_statement`, which is a string containing a dynamic Postgres insert statement with 5 parameters:

  - store
  - item
  - number_of_items
  - price
  - buy_date.

1. Using the previously established connection, add 5 purchases to the receipts table, *randomly* assigning a store, quantity, item, and price from the dummy data provided in `ruby_powered_shopping_spree.rb`. The date purchased should be today's [date](http://ruby-doc.org/stdlib-2.2.2/libdoc/date/rdoc/Date.html). The [times](http://ruby-doc.org/core-2.2.2/Integer.html#method-i-times) method may be of use here. Use a combination of `exec_params`, `insert_statement`, and the starter data to make this happen.

#### Part 3 - Rebates on yo' Tables!

1. Pan calls you and tells you that since his move from SF to NYC, he's traded in his 49ers Jersey (purchased at Sears on March 23rd) for a Giants Jersey. Being that it's the same price, he wants the receipts database to reflect the change in product alone.
1. Pan calls again, and tells you Sears dropped the price of the PS4 from $400 to $350, and they gave him a discount. He wants the receipts table to reflect the change.

#### Part 4: Ruby-Powered Buyer's Remorse

1. Pan calls again: he went over his monthly budget, and immediately felt bad about the purchases he made on his shopping spree, so he went around randomly returning 8 of his purchases. Thus, make 8 random returns in your Ruby program. Reflect this in the database.
1. [Close](http://www.rubydoc.info/gems/pg/PG%2FConnection%3Afinish) your database connection.
