##### start mongodb
mongo

##### create database
use monsters

##### create vampire collection
db.createCollection('vampires');

##### insert vampire data
db.vampires.insert([{
...   name: 'Count Chocula',
...   hair_color: 'brown',
...   eye_color: 'brown',
...   dob: new Date(1971, 2, 13, 7, 47),
...   loves: ['cereal','marshmallows'],
...   location: 'Minneapolis, Minnesota, US',
...   gender: 'm',
...   victims: 2
... },{
...   name: 'Dracula',
...   dob: new Date(937, 0, 24, 13, 0),
...   hair_color: 'brown',
...   eye_color: 'blue',
...   loves: ['Winona Ryder', 'top hats', 'fancy cloaks', 'handlebar   mustaches'],
...   location: 'Transylvania, Romania',
...   gender: 'm',
...   victims: 1238
... },{
...   name: 'Elizabeth Bathory ',
...   dob: new Date(1560, 8, 7, 22, 10),
...   hair_color: 'brown',
...   eye_color: 'brown',
...   loves: ['virgin blood', 'fancy cloaks','frilly collars'],
...   location: 'Nyírbátor, Hungary',
...   gender: 'f',
...   victims: 980
... },{
...   name: 'Lestat',
...   dob: new Date(1760, 11, 9, 18, 44),
...   hair_color: 'blonde',
...   eye_color: 'blue',
...   loves: ['frilly shirtsleeves', 'frilly collars', 'lurking in   rotting mansions', 'Louis'],
...   location: 'Auvergne, France',
...   gender: 'm',
...   victims: 324
... },{
...   name: 'Louis de Pointe du Lac',
...   dob: new Date(1766, 6, 4, 2, 1),
...   hair_color: 'brown',
...   eye_color: 'blue',
...   loves:['brooding', 'Claudia', 'staring longingly into the   distance'],
...   location: 'New Orleans, Louisiana, US',
...   gender:'m',
...   victims: 150
... },{
...   name:'Claudia',
...   dob: new Date(1793, 2, 7, 8, 30),
...   hair_color: 'blonde',
...   eye_color: 'blue',
...   loves: ['doll babies', 'ribbons', 'appearing innocent', '  trickery'],
...   location: 'New Orleans, Louisiana, US',
...   gender: 'f',
...   victims: 290
... },{
...   name:'Armand',
...   dob: new Date(1481, 6, 1, 10, 42),
...   hair_color: 'red',
...   eye_color: 'brown',
...   loves: ['theatre', 'painting', 'velvet robes', 'being tragic'],
...   location: 'Kiev, Russia',
...   gender: 'm',
...   victims: 1045
... },{
...   name:'Santino',
...   dob: new Date(1465, 6, 1, 10, 42),
...   hair_color: 'brown',
...   eye_color: 'brown',
...   loves: ['trickery', 'vampiric cults', 'fancy cloaks'],
...   location: 'Rome, Italy',
...   gender: 'm',
...   victims: 1103
... },{
...   name:'Akasha',
...   dob: new Date(-8000, 6, 1, 10, 42),
...   hair_color: 'brown',
...   eye_color: 'green',
...   loves: ['eating hearts', 'bathing in roses', 'elaborate   headdresses', 'R&B music'],
...   location: 'Kemet, Egypt',
...   gender: 'f',
...   victims: 210234,
...   title: 'Queen of the Damned'
... },{
...   name: 'Edward Cullen',
...   dob: new Date(1901, 6, 20, 0, 57),
...   hair_color: 'brown',
...   eye_color: 'brown',
...   loves: ['brooding', 'diamond skin', 'calling people spider   monkeys'],
...   location: 'Chicago, Illinois, US',
...   gender: 'm',
... },{
...   name: 'Persephone Bourignon',
...   dob: new Date(1801, 5, 17, 14, 53),
...   hair_color: 'red',
...   eye_color: 'green',
...   loves: ['wine', 'fancy cloaks', 'appearing innocent'],
...   location: 'Paris, France',
...   gender: 'f',
...   victims: 450
... },{
...   name: 'René Tremblay',
...   dob: new Date(1922, 2, 8, 5, 3),
...   hair_color: 'brown',
...   eye_color: 'green',
...   loves: ['frilly shirtsleeves', 'trickery', 'card games'],
...   location: 'Bucharest, Romania',
...   gender: 'm',
...   victims: 134
... },{
...   name: 'Caroline Belmont',
...   hair_color: 'blonde',
...   eye_color: 'brown',
...   dob: new Date(1799, 4, 21, 16, 15),
...   loves: ['marshmallows', 'ribbons', 'being tragic'],
...   location: 'Ljubljana, Slovenia',
...   gender: 'f',
...   victims: 567
... },{
...   name: 'Francis Frost',
...   hair_color: 'black',
...   eye_color: 'blue',
...   dob: new Date(1976, 6, 18, 18, 18),
...   loves: ['brooding', 'frilly shirtsleeves'],
...   location: 'New York, New York, US',
...   gender: 'm',
...   victims: 112
... },{
...   name: 'Barnabas Spenser',
...   hair_color: 'brown',
...   eye_color: 'brown',
...   dob: new Date(1984, 6, 3, 13, 12),
...   loves: ['being merry', 'being insane', 'card games'],
...   location: 'New York, New York, US',
...   gender: 'm',
...   title: 'Osiris of Sewer Rats'
... }]);

##### have greater than 500 victims
db.vampires.find({victims: {$gt: 500}});

##### have fewer than or equal to 150 victims
db.vampires.find({victims: {$lte: 150}});

##### have a victim count is not equal to 210234
db.vampires.find({victims: {$ne: 210234}});

##### have greater than 150 AND fewer than 500 victims
db.vampires.find({victims: {$gt: 150, $lt:500}});

##### have a title property
db.vampires.find({title: {$exists: true}});

##### do not have a victims property
db.vampires.find({victims: {$exists: false}});

##### have a title AND no victims
db.vampires.find({victims: {$exists: false}, title: {$exists:true}});

##### have victims AND the victims they have are greater than 1000
db.vampires.find({victims: {$exists: true, $gt: 1000}});

##### love either frilly shirtsleeves or frilly collars
db.vampires.find({$or: [{loves: {$in: ['frilly shirtsleeves']}}, {loves: {$in: ['frilly collars']} }]});

##### love brooding
db.vampires.find({loves: {$in:['brooding']}});

##### love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
db.vampires.find({$or: [{loves: {$in: ['appearing innocent']}}, {loves: {$in: ['trickery']}}, {loves:{$in: ['lurking in rotting mansions']}}, {loves: {$in: ['R&B music']}}]});


##### love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *
db.vampires.find({$and: [{loves: {$in: ['fancy cloaks']}}, {loves: {$nin: ['top hats', 'virgin blood']}}]});

##### are from New York, New York, US or New Orleans, Louisiana, US
db.vampires.find({$or: [{location: 'New York, New York, US'},{location: 'New Orleans, Louisiana, US'}] });

##### love brooding or being tragic
db.vampires.find({$or: [{loves: {$in:['brooding']}}, {loves: {$in: ['being tragic']}}]});

##### have more than 1000 victims or love marshmallows
db.vampires.find({$or: [{victims: {$gt: 1000}}, {loves: {$in: ['marshmallows']}}]});

##### have red hair or green eyes
db.vampires.find({$or: [{hair_color: 'red'},{eye_color: 'green'}]});

##### love ribbons but do not have blonde hair
db.vampires.find({$and: [{loves: {$in: ['ribbons']}}, {hair_color: {$nin: ['blonde']}} ]});

##### are not from Rome
db.vampires.find({location: {$nin: ['Rome, Italy']}});

##### do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
db.vampires.find({$or: [{loves: {$nin: ['fancy cloaks']}},{loves: {$nin: ['frilly shirtsleeves']}}, {loves: {$nin: ['appearing innocent']}}, {loves: {$nin: ['being tragic']}}, {loves: {$nin: ['brooding']}} ]});

##### have not killed more than 200 people
db.vampires.find({victims: {$not: {$gt: 200}}});
