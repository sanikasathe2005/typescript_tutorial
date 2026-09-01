let hobbies:string[]=["sports","singing","travelling"];
hobbies.push(10);//warning
hobbies.push("learning");
console.log(hobbies);//allowed

//advanced arrays concepts
let users:(string|number)[];
users=[1,'hello'];
users=['hii','bye']
users=[5,3];

//generic type
let users:Array<string|number>;