// Polymorphism

class Animal {
    constructor (name) {
        this.name = name;
    }

    makeSound () {
        console.log("Generic animal sound!");
    }
}

class Dog extends Animal {
    constructor (name) {
        super(name);
    }

    makeSound () {
        super.makeSound() // to inherit makeSound from parent class.
        console.log("Woof! Woof!");
    }

}

const a1 = new Animal('Simba');
const d1 = new Dog('Chui');

a1.makeSound();

d1.makeSound(); // both sounds form both classes due to the super keyword.