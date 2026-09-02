// Generics
// Generics allow us to write reusable code that works with
// different data types while maintaining type safety.

function print<T>(value: T): T {
    return value;
}

console.log(print("Sanika")); // Sanika
console.log(print(12));       // 12
console.log(print(true));     // true


// Generic Interface

interface Box<T> {
    value: T;
}

let box1: Box<string> = {
    value: "Sanika"
};

let box2: Box<number> = {
    value: 20
};

console.log(box1.value); // Sanika
console.log(box2.value); // 20


// Generic Constraints
// extends restricts the type that can be passed.

function printLength<T extends string>(value: T) {
    console.log(value.length);
}

printLength("Sanika"); // 6

// printLength(20); // Error


// Multiple Generic Types

function pair<T, U>(first: T, second: U) {
    return {
        first,
        second
    };
}

let result = pair<string, number>("Sanika", 20);

console.log(result);
// { first: "Sanika", second: 20 }
