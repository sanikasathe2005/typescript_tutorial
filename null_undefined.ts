
//1.undefined 
let message:string;
console.log(message);
console.log(typeof(message));//undefined

function greet()
{
    console.log("hello");
    
}
let respond=greet();
console.log(respond);
// "hello" prints first because calling greet() immediately executes the console.log("hello") line inside the function.
// undefined prints next because the function doesn't have a return statement

//2.NUll
let selecteduser:null=null;
console.log(selecteduser);
console.log(typeof(selecteduser));//object

let loggedinuser:string|null=null;
console.log(typeof(loggedinuser));//object

// undefined has the datatype of "undefined".

// null has the datatype of "object" due to a famous historical bug in JavaScript, even though it acts as a primitive empty value.

