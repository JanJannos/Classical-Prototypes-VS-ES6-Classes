var person = {
  firstname: 'Def',
  lastname: 'Def',
  getFullName: function () {
    return this.firstname + ' ' + this.lastname;
  },
};

var john = {
  firstname: 'John',
  lastname: 'Doe',
};

// Don't do this ever
john.__proto__ = person;
console.log(`John : ${john.getFullName()}`); // prints John Doe

// create Jane
var jane = {
  firstname: 'Jane',
};

jane.__proto__ = person;
console.log(`Jane : ${jane.getFullName()}`); // prints Jane Def
