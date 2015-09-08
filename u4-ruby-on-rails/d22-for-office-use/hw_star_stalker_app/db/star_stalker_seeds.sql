DROP TABLE IF EXISTS stars CASCADE;

CREATE TABLE stars (
  id         SERIAL   PRIMARY KEY,
  name       VARCHAR  NOT NULL,
  alive      BOOLEAN  DEFAULT TRUE,
  born_on    DATE     NOT NULL,
  image_url  VARCHAR  NOT NULL,
  embed_id   VARCHAR  NOT NULL
);

-- create stars
INSERT INTO stars
  (name, alive, born_on, image_url, embed_id)
VALUES
  ('Jim Morrison', false, '12/08/1943', 'http://images.soulpancake.s3.amazonaws.com/jimMorrison_thumb_thumb.jpg', '1-gpTJALpMw'),
  ('Michael Jackson', false, 'June 25, 2009', 'http://upload.wikimedia.org/wikipedia/commons/3/31/Michael_Jackson_in_1988.jpg', 'S41n8IVKvpw'),
  ('Madonna', true, 'August 16, 1958', 'http://upload.wikimedia.org/wikipedia/commons/9/9c/Madonna_%C3%A0_Nice_30_2.jpg', 'rSaC-YbSDpo'),
  ('Kenny Baker', true, 'August 24, 1934', 'http://upload.wikimedia.org/wikipedia/commons/7/77/Kenny_Baker_convention.jpg', '6S4GVnV2b1Y');
