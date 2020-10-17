// Classical Inheritance

var Player = function (name, type) {
  this.type = type;
  this.name = name;
};

Player.prototype.introduce = function () {
  console.log(`My name is ${this.name} and I'm a ${this.type}`);
};

const wiz1 = new Wizard('Shelly', 'Healer');
const wiz2 = new Wizard('Shawn', 'Dark Magic');

wiz1.play = function () {
  console.log(`WEEEEEEEEEEEE I'am a ${this.type}`);
};

wiz2.play = function () {
  console.log(`WEEEEEEEEEEEE I'am a ${this.type}`);
};
