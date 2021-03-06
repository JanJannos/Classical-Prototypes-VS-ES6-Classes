//Define a functional object to hold persons in JavaScript
var Person = function (name) {
  this.name = name;
};

//Add dynamically to the already defined object a new getter
Person.prototype.getName = function () {
  return this.name;
};

//Create a new object of type Person
var john = new Person('John');

//Try the getter
alert(john.getName());

//If now I modify person, also John gets the updates
Person.prototype.sayMyName = function () {
  alert('Hello, my name is ' + this.getName());
};

//Call the new method on john
john.sayMyName();

// **********
// Extnding *
// **********

//Create a new object of type Customer by defining its constructor. It's not
//related to Person for now.
var Customer = function (name) {
  this.name = name;
};

//Now I link the objects and to do so, we link the prototype of Customer to
//a new instance of Person. The prototype is the base that will be used to
//construct all new instances and also, will modify dynamically all already
//constructed objects because in JavaScript objects retain a pointer to the
//prototype

Customer.prototype = new Person();

//Now I can call the methods of Person on the Customer, let's try, first
//I need to create a Customer.

var myCustomer = new Customer('Dream Inc.');
myCustomer.sayMyName();

//If I add new methods to Person, they will be added to Customer, but if I
//add new methods to Customer they won't be added to Person. Example:
Customer.prototype.setAmountDue = function (amountDue) {
  this.amountDue = amountDue;
};
Customer.prototype.getAmountDue = function () {
  return this.amountDue;
};

//Let's try:
myCustomer.setAmountDue(2000);
alert(myCustomer.getAmountDue());
