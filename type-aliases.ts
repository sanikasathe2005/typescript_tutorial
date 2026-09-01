
// a type alias lets you give a custom name to a type using the type keyword.
type username=string;

let myname:username="sanika";
console.log(myname);

//in function
type addfun=(
    a:number,
    b:number
)=>number;
let add:addfun=(x,y)=>{
    return x+y;
}
console.log(add(10,5));

//union
type ID = string | number;

let id: ID = 123;     
id = "abc";            
//intersection
type Person = { name: string };
type Employee = { id: number };

type Staff = Person & Employee;

let staff: Staff = {
  name: "John",
  id: 101
};

