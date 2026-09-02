class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    eat() {
        console.log(this.name, "is eating");
    }
}

class Tiger extends Animal {
    sound() {
        console.log("Roar!");
    }
}

const tiger = new Tiger("Tiger");

tiger.eat();
tiger.sound();
