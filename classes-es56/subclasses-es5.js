// ES5


// Superclass
function PersonES5(firstName, lastName, age, nationality) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.nationality = nationality;
}

// Method 
PersonES5.prototype.calculateBirthYear = function () {
    const current = new Date().getFullYear();
    const yearBorn = current - this.age;
    console.log(yearBorn);
}

//Subclass
function ActorES5(firstName, lastName, age, nationality, occupation, interests, movies, oscars) {
    PersonES5.call(this, firstName, lastName, age, nationality);
    // Set args from Actor class
    this.occupation = occupation;
    this.interests = interests;
    this.movies = movies;
    this.oscars = oscars;
}

// Create connection between Actor and Person
ActorES5.prototype = Object.create(PersonES5.prototype);

// Mark Actor
const markActor = new ActorES5('Mark', 'Wahlberg', 45, 'American', 'Action Movies', 'Playing', 'A lot ...', 'Many ...');
console.log('markActor' , markActor);