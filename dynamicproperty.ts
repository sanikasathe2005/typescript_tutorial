// // “Index signature allows us to define an object with dynamic property names while specifying the type of their values.”

// interface Marks {
//     [subject: string]: number
// }
// //with numbers
let marks: Marks = {
    maths: 90,
    science: 85,
    english: 88
}
// console.log(marks.maths);
// console.log(marks.science);
// console.log(marks.english);

// //with string
// interface Student {
//     [key: string]: string
// }

 let student: Student = {
    name: "Sanika",
    city: "Pune",
    college: "DKTE College",
    course: "BTech"
}

// console.log(student.name);
// console.log(student.city);
// console.log(student.college);
// Here, name, city, college, and course are dynamic property names, but all their values must be strings.