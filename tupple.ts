let admin:[string,number]=["mohit",25];//ok
// let admin2:[number,string]=["mohit",25];//error (needs o maintain order)
console.log(admin);


// Array → collection of similar values
// Tupple → fixed-position values with known types


//enums->An enum is simply a way to define a fixed list of choices.
// let statuscode="success";
enum direction{
    up,
    down,
    left,
    right
}
// Default enum values
// If you don't give values, TypeScript automatically starts from 0:
console.log(direction.up);
console.log(direction.down);
console.log(direction.left);
console.log(direction.right);

enum directions{
    up1="east",
    down1="west",
    left1="north",
    right1="south"
}
//custom enum values-given by users
console.log(directions.up1);
console.log(directions.down1);
console.log(directions.left1);
console.log(directions.right1);


