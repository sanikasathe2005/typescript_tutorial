function greet(myusername:string)
{
    console.log("welcome",myusername);
    
}
greet("sanika sathe");

function addition(num1:number,num2:number)
{
    console.log(num1+num2);
    
}
addition(3,4);

//return type
function summation(num1:number,num2:number):number
{
    return num1+num2;
    
}

addition(3,4);

//arrow function
const sub=(
    E:number,
    R:number):number=>{
        return E-R;
    }
console.log(sub(8,6));

// 1. Optional parameter ?
// Means the parameter may or may not be provided.

function greet(name?: string) {
  console.log(name);
}

greet("John"); 
greet();       

//2. Default parameter =
//Means if no value is given, use a default value.

function greet(name: string = "Guest") {
  console.log(name);
}

greet("John"); // John
greet();       // Guest