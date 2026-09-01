// let age =36;
// age="37";//gives error
//The any type is a shortcut that turns off TypeScript's safety checks so a variable can hold any kind of data.
let age:any=36;
age="37";
age={};
age=false;
console.log(age);
console.log(typeof(age));
//union types-holds either of a value
let a:string|number=24;
a="pune";

//unknown type-->unknown is a type-safe top type that requires you to check the type before using it.
let value:unknown="TS";
console.log(typeof(value));
if(typeof value=="string")
{
    console.log(value.toUpperCase());
    
}

// Use unknown for unpredictable data (like API responses or catch errors) because it forces you to check the type before using it safely.

// Use any only as a temporary escape hatch when migrating old JavaScript code or dealing with broken libraries that lack type definitions.

