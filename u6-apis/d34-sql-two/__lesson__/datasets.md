# Database Joins

##### LEARNING OBJECTIVES
- SWBAT Load Data from CSV files
- SWBAT Explain the difference between an INNER and LEFT JOIN.
- SWBAT Combine data from two tables into a single result-set
- SWBAT Use ActiveRecord `.joins`

### INTRO
Watch http://www.ted.com/talks/ben_wellington_how_we_found_the_worst_place_to_park_in_new_york_city_using_big_data#t-113707

Introduce NYC Open Data, browse for "Parks", ask students

# STEP 1
Loading CSV Data into PostgreSQL **[W]**

```
$ rails g model park prop_id:string name:string location:string zip:string
$ rails dbconsole

nycbbq_development=#
COPY parks (Prop_ID,Name,Location,Zip)
FROM '/Users/jaden/wdi/pluto/u6-apis/d34-sql-two/__lesson__/datasets/parks.csv'
DELIMITER ',' CSV HEADER;
```

# STEP 2
Create a webpage to view all of the parks (no scaffold) **[Y]**

# STEP 3
Introduce in a Rails console **[I]**:
- `.limit` limits the records returned
- `.offset` offsets the records returned

Add Pagination **[W]**

# STEP 4
[Y] Students are given `barbeque_locations.csv`.  Students should import the barbeque_locations into a new table, with a new model.

ANSWER: ```
COPY park_bbqs (Prop_ID,Name,Location) FROM '/Users/jaden/wdi/pluto/u6-apis/d34-sql-two/__lesson__/datasets/barbeque_locations.csv' DELIMITER ',' CSV HEADER;
```

# STEP 5 [I]
*SLIDES*
- Describe INNER/LEFT/OUTER joins

# STEP 6 [W]
- Use `rails dbconsole` to join two tables together on `prop_id`
- Introduce `.joins` and do the same thing in the Rails console.

# STEP 7 [Y]
- Create another page (no scaffold) that lists all of the barbeque locations, alongside the address for the corresponding park.
