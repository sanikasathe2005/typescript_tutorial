//function overloading(same name,diff parameter)
function addition(
    a:number,
    b:number

):number{
    return a+b;
    
};

function addition(
a:string,
b:string
):string{
    return a+b;
}

console.log(addition(2,5));
console.log(addition("sanika","sathe"));

//arrow functions->simplest way of writing a function
const greeting=()=>
{
    console.log("wlc");
    
}
greeting();

//multiple parameter
const oper=(a:number,b:number)=>{
    return a+b;
}
console.log(oper(9,7));
