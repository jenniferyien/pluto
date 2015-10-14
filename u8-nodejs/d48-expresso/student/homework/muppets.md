##### Create a get route for /muppets that will print and display the different muppet's
json file

* curl http://localhost:1337/muppets

##### Create a post route /muppets/new to add a new muppet

* curl -X POST -H "Content-Type: application/json" -d '{"id":"5","name": "pizza", "description":"orange", "age": "90"}' http://localhost:1337/muppets/new
* curl -X POST -H "Content-Type: application/json" -d '{"id":"6","name": "meatball", "description":"purple", "age": "42"}' http://localhost:1337/muppets/new
* curl -X POST -H "Content-Type: application/json" -d '{"id":"7","name": "hunger", "description":"lime green", "age": "56"}' http://localhost:1337/muppets/new
* curl -X POST -H "Content-Type: application/json" -d '{"id":"8","name": "dumplings", "description":"pink", "age": "3"}' http://localhost:1337/muppets/new

##### Create an edit route for /muppets/:id

* curl -X POST -H "Content-Type: application/json" -d '{"id":"3","name": "Swedish Chef", "description":"chef, VERY Swedish", "age": "50"}' http://localhost:1337/muppets/3

##### Create a delete route /muppets/:id

* curl -X DELETE http://localhost:1337/muppets/2
