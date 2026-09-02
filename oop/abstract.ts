abstract class Animal {

    abstract sound(): void;

    eat() {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {

    sound() {
        console.log("Bark");
    }
}

const dog = new Dog();

dog.sound();
dog.eat();
//An abstract class is a base class that cannot be created directly. 
// In the example, Animal has an abstract sound() method, so the Dog class must implement it. Dog also inherits the eat() method from Animal.