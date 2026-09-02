//#Mapped types allow us to create a new type by changing or looping over the properties of an existing type.
type User = {
    name: string;
    age: number;
}
// for all properties to be optional:
type OptionalUser = {
    [key in keyof User]?: User[key];
}//can be written same for readonly
//keyof gives us all property names of a type.

//2.conditional types
type checkstring<T>=T extends string?"yes":"no"
type result1=checkstring<string>
type result2=checkstring<number>
const Result:result1="yes";
console.log(Result);

type IsAdmin<T> = T extends "admin" ? true : false;

type User1 = IsAdmin<"admin">; // true
type User2 = IsAdmin<"user">;  // false

const user: User1 = true;

console.log(user);
// extends in Conditional Types
// In a conditional type, extends means “does this type match or satisfy this type?”

//3.utility types->Utility types are built-in TypeScript types that help us modify or create new types from existing types.
// *Partial->Makes all properties optional.
interface Person {
    name: string;
    age: number;
}

let person: Partial<Person> = {
    name: "Sanika"
}

console.log(person);

//2.pick->used to select specific properties
let person: Pick<Person, "name" | "city"> = {
    name: "Sanika",
    city: "Pune"
}

console.log(person);//age is not included.

//3.omit->Omit is used to remove specific properties from a type.

interface Person {
    name: string;
    age: number;
    city: string;
}

let person: Omit<Person, "age"> = {
    name: "Sanika",
    city: "Pune"
}

console.log(person);//age is removed

//4.Record is a utility type used to create an object type with specific keys and a specific value type.

type userrole=Record<"admin"|"user"|"guest",string>
const roles:userrole={
    admin:"full access",
    user:"limited",
    guest:"read only"
}
console.log(roles);
