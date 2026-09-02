//type narrowing
//Type narrowing means checking the type of a variable and then TypeScript understands its specific type inside that block.

//1.using typeof
function printValue(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}

printValue("Sanika");
printValue(20);
//2.using instanceof
//instanceof is used to check whether an object belongs to a particular class. TypeScript then narrows the type.
class Dog {
    bark() {
        console.log("Bark");
    }
}

class Cat {
    meow() {
        console.log("Meow");
    }
}

function check(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark();
    } else {
        animal.meow();
    }
}
check(new Dog());  // Output: Bark
check(new Cat());  // Output: Meow

//literal types
// A literal type allows us to specify the exact value a variable can have.
let role="admin";
role="admin";
console.log(role);

let direction: "left" | "right" | "up" | "down";

direction = "left";   
direction = "right";  
// direction = "hello"; //  Error

type dicevalue=
|1
|2
|3
|4
|5
|6
let dice:dicevalue=6;
console.log(dice);
//boolean literals
let isverified:true;
isverified=true;
console.log(isverified);

//literals-function
function setTheme(
    theme:"dark"|"light"
){
    console.log(theme);
    
}
setTheme("dark");
