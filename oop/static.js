"use strict";
//static properties->A static property belongs to the class itself, not to individual objects. We access it using the class name.
class MathUtils {
    static app = "calculator";
}
console.log(MathUtils.app);
//static methods
class Car {
    static wheels = 4;
    static showWheels() {
        console.log(Car.wheels);
    }
}
Car.showWheels();
//Instance members belong to an object (instance) of a class. We need to create an object using new to access them.
class Car2 {
    color;
    constructor(color) {
        this.color = color;
    }
    showColor() {
        console.log(this.color);
    }
}
const car = new Car2("Red");
console.log(car.color);
car.showColor();
