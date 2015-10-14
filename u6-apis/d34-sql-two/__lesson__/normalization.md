# Database Normalization

##### LEARNING OBJECTIVES
- SWBAT Normalize a Dataset
- SWBAT Generate Statistics From a Dataset

### STEP 1

Using the NYCBBQ activity from the morning,  Examine Prop_ID and point out
that it corresponds to a borough.

Our goal this afternoon is to extract that into a new table named `boroughs` and replace it with a new column named `borough_id`

This process is called "Normalization"

READ: https://en.wikipedia.org/wiki/Database_normalization

### STEP 2
Aggregate functions:

READ: http://www.postgresql.org/docs/9.1/static/functions-aggregate.html

- Talk about GROUP BY, using `array_agg` to demonstrate:
  - `SELECT zip, array_agg(parks.id) FROM parks GROUP BY zip`

ACTIVITY:
Use Postgresql and Aggregate functions to:
- List all of the zip codes, with the number of parks in each zip code.
  - `SELECT zip, COUNT(*) FROM parks GROUP BY zip ORDER BY count DESC`
- Get all of the parks ordered by the number of bbqs they have.
  - `SELECT parks.prop_id, parks.location, COUNT(park_bbqs.id) count FROM parks LEFT JOIN park_bbqs ON park_bbqs.prop_id = parks.prop_id GROUP BY parks.id ORDER BY count DESC;`

- `SELECT LEFT(prop_id,1) code FROM parks GROUP BY code;`
- `INSERT INTO boroughs (code) (SELECT LEFT(prop_id,1) code FROM parks GROUP BY code)`
- `UPDATE parks SET boroughs_id = boroughs.id FROM parks b JOIN boroughs ON LEFT(b.prop_id,1) = boroughs.code`
- `UPDATE parks SET boroughs_id = boroughs.id FROM boroughs WHERE LEFT(parks.prop_id,1) = boroughs.code;`
