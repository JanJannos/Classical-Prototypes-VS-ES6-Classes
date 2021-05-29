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
}


class ActorES6 extends PersonES6 {
    constructor(firstName, lastName, age, nationality, occupation, interests, movies, oscars) {
        // Args of Person
        super(firstName, lastName, age, nationality);
        this.occupation = occupation;
        this.interests = interests;
        this.movies = movies;
        this.oscars = oscars;
    }

    oscarsWon() {
        console.log(this.oscars);
    }
}

const markActor = new ActorES6('Mark', 'Wahlberg', 45, 'American', 'Action Movies', 'Playing', 'A lot ...', 'Many ...');
console.log('markActor', markActor);