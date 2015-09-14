DROP DATABASE IF EXISTS "the-office";
CREATE DATABASE "the-office";
\c the-office

CREATE TABLE forms (
  id SERIAL,
  name VARCHAR,
  email VARCHAR
)
