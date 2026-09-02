interface Guest {
    name: string,
   id: number
}

let guest: Guest = {
    name: "Sanika",
   id: 20
}

console.log(guest);
console.log(guest.name);
console.log(guest.id);
//same interface can be used multliple times
let guest2:Guest={
    name:"pranali",
    id:22
}
console.log(guest2);
console.log(guest2.name);
console.log(guest2.id);

//interface with fucntion
interface mul_fun{
    (a:number,b:number)
:number}
let mul:mul_fun=(a,b)=>
{
    return a*b;
}
console.log(mul(4,5));
//reusable function
interface calculator{
    (a:number,b:number):number
}
let add1:calculator=(a,b)=>a+b;
let sub1:calculator=(a,b)=>a-b;
let mul1:calculator=(a,b)=>a*b;
console.log(add1(7,6));
console.log(sub1(7,6));
console.log(mul1(7,6));
//type vs interface