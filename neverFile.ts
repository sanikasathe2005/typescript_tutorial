//never on an error-throwing function explicitly tells the TypeScript compiler that execution will permanently halt and a value will never be returned.
//stops execution
//********use1******
// function throwError(message:string):never{
//     throw new Error(message);
// }
// throwError("404 error")



//*****************use2***********
// function infifnityloop():never{
//     while(true)
//     {
//         console.log("running..");
        
//     }
// }
// infifnityloop();

// With never: TypeScript says, "Got it, this loop runs forever and never exits."

// Without never: TypeScript thinks, "This function might finish at some point," which can cause compiler errors if a return value is expected.

// void vs never

// void: The function finishes executing normally and implicitly returns undefined. Code execution continues afterward.

// never: The function never finishes executing (it throws an error or runs an infinite loop) and returns nothing at all. Code execution stops permanently.
function greet2():void{
    console.log("hello");
    
}
const ans=greet2();
console.log(ans);
