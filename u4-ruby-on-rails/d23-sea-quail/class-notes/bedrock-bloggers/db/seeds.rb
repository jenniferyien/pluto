Dir.chdir(File.dirname(File.expand_path("..", __FILE__)))

require "ffaker"
require './bedrock_bloggers'

$db.exec("TRUNCATE blogs, bloggers RESTART IDENTITY")

# -- Fred Flintstone
fred = Blogger.create({
  name: 'Fred Flintstone',
  slogan: 'Yabba-Dabba-Doo!',
  login: 'fred',
  password: 'flintstone'
})
10.times do
  Blog.create(fred, {
    title: FFaker::BaconIpsum.sentence,
    content: '<p>'+FFaker::BaconIpsum.paragraphs(6).join('</p><p>')+'</p>'
  })
end

# -- Wilma Flintstone
wilma = Blogger.create({
  name: 'Wilma Flintstone',
  slogan: 'Fred!',
  login: 'wilma',
  password: 'flintstone'
})
10.times do
  Blog.create(wilma, {
    title: FFaker::BaconIpsum.sentence,
    content: '<p>'+FFaker::BaconIpsum.paragraphs(6).join('</p><p>')+'</p>'
  })
end

# -- Pebbles Flintstone
pebbles = Blogger.create({
  name: 'Pebbles Flintstone',
  login: 'pebbles',
  password: 'flintstone'
})
3.times do
  Blog.create(pebbles, {
    title: FFaker::BaconIpsum.sentence,
    content: '<p>'+FFaker::BaconIpsum.paragraphs(6).join('</p><p>')+'</p>'
  })
end

# -- Betty Rubble
betty = Blogger.create({
  name: 'Betty Rubble',
  slogan: 'Oh Fred!',
  login: 'betty',
  password: 'rubble'
})
10.times do
  Blog.create(betty, {
    title: FFaker::BaconIpsum.sentence,
    content: '<p>'+FFaker::BaconIpsum.paragraphs(6).join('</p><p>')+'</p>'
  })
end

# -- Barney Rubble
barney = Blogger.create({
  name: 'Barney Rubble',
  slogan: "I don't think that is a good idea Fred",
  login: 'barney',
  password: 'rubble'
})
10.times do
  Blog.create(barney, {
    title: FFaker::BaconIpsum.sentence,
    content: '<p>'+FFaker::BaconIpsum.paragraphs(6).join('</p><p>')+'</p>'
  })
end

# -- Bamm-Bamm Rubble
bammbamm = Blogger.create({
  name: 'Bamm-Bamm Rubble',
  slogan: 'BAMM! BAMM!',
  login: 'bammbamm',
  password: 'rubble'
})
3.times do
  Blog.create(bammbamm, {
    title: FFaker::BaconIpsum.sentence,
    content: '<p>'+FFaker::BaconIpsum.paragraphs(6).join('</p><p>')+'</p>'
  })
end
