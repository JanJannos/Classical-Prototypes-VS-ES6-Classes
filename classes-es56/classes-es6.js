// ES6

class PersonES6 {
    constructor(firstName, lastName, age, nationality) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.nationality = nationality;
    }

    calculateBirthYear() {
        const current = new Date().getFullYear();
        const yearBorn = current - this.age;
        console.log(yearBorn);
    }

    static PringSomething() { 
        console.log('...');
    }
}


const morgan = new PersonES6('Morgan', 'Freeman', 34, 'American').calculateBirthYear();