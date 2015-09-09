DROP DATABASE IF EXISTS bedrock_bloggers;
CREATE DATABASE bedrock_bloggers;
\c bedrock_bloggers

CREATE TABLE bloggers (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  login VARCHAR NOT NULL,
  slogan VARCHAR,
  password VARCHAR,
  created_at TIMESTAMP NOT NULL
);

CREATE TABLE blogs (
  id SERIAL PRIMARY KEY,
  blogger_id INTEGER REFERENCES bloggers(id),
  title VARCHAR,
  content TEXT,
  created_at TIMESTAMP
);
