// ES5

function PersonES5(firstName, lastName, age, nationality) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.nationality = nationality;
}


PersonES5.prototype.calculateBirthYear = function () {
    const current = new Date().getFullYear();
    const yearBorn = current - this.age;
    console.log(yearBorn);
}


const andy = new PersonES5('Andy', 'Garcia', 64, 'American').calculateBirthYear();