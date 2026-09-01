let hobbies:string[]=["sports","singing","travelling"];
// hobbies.push(10);//warning
hobbies.push("learning");
console.log(hobbies);//allowed

//advanced arrays concepts
let users:(string|number)[] = [];
users=[1,'hello'];
users=['hii','bye']
users=[5,3];

let total:number[]=[100,200,300];
console.log(total);

//generic type
let users2:Array<string|number>;

//array<type>
let user2:Array<string>=["sanika","sakshi"]
console.log(user2);
//multiple datatype using union
let data3:(string|number)[]=["mango",567,"summer"]
console.log(data3);

//advanced array methods-->map,filter,reduce
//map() → transforms every element → returns a new array
let num:number[]=[10,20,30];
let double=num.map(i=>i*2);
console.log(double);
// filter() → selects elements based on a condition → returns a new array
let res3=num.filter(p=>p>10);
console.log(res3);
// reduce() → combines all elements into one value

let sum=num.reduce((total,k)=>total+k);
console.log(sum);
