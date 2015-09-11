# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
<<<<<<< HEAD
=======
Blog.delete_all
Blogger.delete_all


fred = Blogger.create({
  name: 'Fred Flintstone',
  slogan: 'Yabba-Dabba-Doo!',
  login: 'fred',
  password: 'flintstone'
})

3.times do
  Blog.create({
    blogger_id: fred.id,
    title: FFaker::BaconIpsum.sentence,
    content: '<p>'+FFaker::BaconIpsum.paragraphs(6).join('</p><p>')+'</p>'
  })
end

betty = Blogger.create({
  name: 'Betty Rubble',
  slogan: 'Oh Fred!',
  login: 'betty',
  password: 'rubble'
})

3.times do
  Blog.create({
    blogger_id: betty.id,
    title: FFaker::BaconIpsum.sentence,
    content: '<p>'+FFaker::BaconIpsum.paragraphs(6).join('</p><p>')+'</p>'
  })
end

pebbles = Blogger.create({
  name: 'Pebbles Flintstone',
  login: 'pebbles',
  password: 'flintstone'
})

3.times do
  Blog.create({
    blogger_id: pebbles.id,
    title: FFaker::BaconIpsum.sentence,
    content: '<p>'+FFaker::BaconIpsum.paragraphs(6).join('</p><p>')+'</p>'
  })
end

barny = Blogger.create({
  name: 'Barny Rubble',
  slogan: 'Yabba-Dabba-Doo!',
  login: 'fred',
  password: 'flintstone'
})

3.times do
  Blog.create({
    blogger_id: barny.id,
    title: FFaker::BaconIpsum.sentence,
    content: '<p>'+FFaker::BaconIpsum.paragraphs(6).join('</p><p>')+'</p>'
  })
end

bam = Blogger.create({
  name: 'Bamm-Bamm Rubble',
  slogan: 'BAMM! BAMM!',
  login: 'bammbamm',
  password: 'rubble'
})

3.times do
  Blog.create({
    blogger_id: bam.id,
    title: FFaker::BaconIpsum.sentence,
    content: '<p>'+FFaker::BaconIpsum.paragraphs(6).join('</p><p>')+'</p>'
  })
end
>>>>>>> 56cf2f5bb562c006994b5768923b86f3e11c2362
