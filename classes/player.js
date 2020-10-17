// Class based

class Player {
  consructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`My name is ${this.name} and I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  consructor(name, type) {
    super(name, type);
  }

  play() {
    console.log(`WEEEEEEEEEEEE I'am a ${this.type}`);
  }
}

const wiz1 = new Wizard('Shelly', 'Healer');
const wiz2 = new Wizard('Shawn', 'Dark Magic');
