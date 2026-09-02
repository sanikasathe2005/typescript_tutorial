//classes->
//A class is a blueprint for creating objects. It contains properties and methods.
// class Users{
//     username="sanika",
//     age=20

// }
// const u=new Users();
// console.log(u.username);
// console.log(u.age);

// class Users{
//     name:string;
//     age:number
// }
// const user=new Users();
// user.name="sanika";
// user.age=23;
// console.log(user);

//A constructor is a special method in a class that is automatically called when we create an object. It is mainly used to initialize properties.
class Student {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let student = new Student("Sanika", 20);

console.log(student.name);
console.log(student.age);

//access modifier->public,private,protected
//public->Can be accessed anywhere.
class Student {
    public name: string = "Sanika";
}

let student = new Student();

console.log(student.name); 


// private Can be accessed only inside the same class.
//protected  → Same class + child class
