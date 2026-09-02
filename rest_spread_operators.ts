// #Rest operator ...
// Rest collects multiple values into one array.
function addNumber(...num:number[]){
    console.log(num);
    
}
addNumber(10,20,30,40);

//#Spread operator ...
// Spread takes an array/object and expands its contents.
let num=[1,2,3,4];
let num2=[...num,5,6,7];
console.log(num2);

//spread operator in object
let user={
    name:"sanika",
    age:20
}
let updateduser={
    ...user,
    age:21

}
console.log(updateduser);
