// Inheritance in classes can be achieved through the 'extends' keyword.

class Person {
    constructor (_name, _age) {
        this.name = _name;
        this.age = _age;
    }

    describe () {
        return `My name is ${this.name}, and I am ${this.age} years old.`;
    }
}

class Programmer extends Person {
    constructor (_name, _age, _yearsOfExperience) {
        super(_name, _age); // inherits properties from person.

        // custom behavior for the class.
        this.yearsOfExperience = _yearsOfExperience;
    }

    code () {
        console.log(`${this.name} is coding!`);
    }
}

const programmers = [
    new Programmer('Adams', 24, 1),
    new Programmer('Kev', 25, 2),
    new Programmer('Muliuks', 19, 2)

]

function developSoftware (programmers) {
    for (let programmer of programmers) {
        programmer.code();
    }
}

developSoftware(programmers);

console.log();
let person1 = new Person('Adams', 24);
console.log(person1);
console.log(person1.describe());


let prog1 = new Programmer('Mosh', 45, 18);
console.log();
console.log(prog1);
prog1.code();
