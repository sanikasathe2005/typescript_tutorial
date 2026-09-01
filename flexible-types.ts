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
