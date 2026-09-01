let username:string="sanika"
console.log(username);

let firstName:string="sanika";
let lastName:string="sathe";
let course:string="typescript";
console.log(firstName,lastName,course);

//string concate
let fullname=firstName+" "+lastName;
console.log(fullname);
let myage=25;
let msg=`my name is ${firstName} and i am ${myage} year old`;
console.log(msg);

//methods
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());
console.log(msg.length);

let isloggedin=false;
if(isloggedin)
{
    console.log("welcome user");
    
}
else{
    console.log("please login");
    
}
