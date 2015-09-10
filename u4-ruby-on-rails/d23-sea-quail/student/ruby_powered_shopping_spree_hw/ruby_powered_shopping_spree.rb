require 'pry'
require 'pg'

#connection to database
pg_conn = PG.connect(dbname: 'shopping_db')

#======================
# Starter Data
#======================
stores = ["Street Vendor", "The White House Gift Shop", "Nordstrom Rack", "The Cake Ambiance"]

quantities = [5, 10, 15, 2, 7]

prices = [4.99, 9.99, 50.00, 75.00, 100.00]

items = [
  "Gummy Cola Bottle",
  "Guava Candy",
  "Taco",
  "Bibimbop",
  "Burrito",
  "Channa Masala",
  "Lettuce Wrap",
  "PIZZA",
  "Cheese",
  "(Disney Soundtrack)",
  "Whiskey",
  "Athletic Socks",
  "Teach Like a Champion",
  "Practice Perfect"
]

#insert data
insert_statement = pg_conn.exec_params('INSERT INTO receipts(store,item,number_of_items,price,buy_date) VALUES($1,$2,$3,$4,$5)',[stores.sample, items.sample, quantities.sample, prices.sample, DateTime.now])

#doing it 5 times
5.times do |i|
  insert_statement
end

#jersey trade
picking = pg_conn.exec_params("UPDATE receipts SET item= 'Giants Jersey' WHERE item = '49ers Jersey'")

#price change
pricing = pg_conn.exec_params("UPDATE receipts SET price= '$350.00' WHERE item = 'PS4'")

#update change 8 random buys prices to $0 reflecting the buyers remorse
remorse = pg_conn.exec_params("UPDATE receipts SET price = '$0.00' WHERE id IN (SELECT id FROM receipts ORDER BY RANDOM() LIMIT 8)")
