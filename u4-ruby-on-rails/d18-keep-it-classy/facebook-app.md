# Facebook App

## Setup

```sql
DROP DATABASE IF EXISTS facebook;
CREATE DATABASE facebook;
\c facebook
```

For this activity we are going to create a file named `facebook.sql`.  Whenever you are working on
a project, it is important that you save your SQL so it can be executed later.  Start your `.sql`
file using the snippet above to do a hard-reset of the database each time you execute the file.

**Don't Forget!** If you do, we won't be able to (easily) replicate your database.  Neither will you
if your database gets scrambled and needs to be reset.

## Step 1: Create `people`

Create a table where we can store a record for each person, named `people`.  It should have fields
for `id`, `first_name`, `last_name`, `birth_date`, `friends_count`, `city`.  The only required
  fields should be `first_name` and `last_name`, all other fields should accept NULL.

## Step 2: Insert some records

Now that we have our table created, lets insert some data into it.

1. The first person we want to record is "Jim Jones"
2. The second person is named "Sue Smith", she has 12 friends
3. The third is named "Jil Nance" and was born "1/1/2003"
4. The fourth is "Samantha Jones", born on "4/12/1989", and has 230 friends

## Step 3: Select some records

1. Select all people with the last name "Jones"
2. Select all people with more than 5 friends
3. **BONUS:** Select all people and calculate their age  *(**HINT:** PostgreSQL has an `age` function)*

## Step 4: Update some records

1. Jim and Sue are friends.  Update Jim's `friends_count` to 1.
2. You can also do Math in SQL.  Increment Samantha's `friends_count` by 1.
