// Person class with an options Hash
/*
var Person = function(options) {
  if (options === undefined) { options = {} }
  this.firstName = options['firstName'];
  this.lastName = options['lastName'];
  this.age = options['age'];
}
*/

var Person = function(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

Person.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
}

Person.prototype.greeting = function() {
  return "Hello "+this.fullName();
}
