// function add(a:number,b:number)
// {
// return a-b;//bug
// console.log(add(10,20));
// }

//1.using console.log
function cal(price: number, quantity: number) {
    console.log(price);      // debugging price
    console.log(quantity);   // debugging quantity

    return price * quantity;
}

console.log(cal(200, 2));

//2.Source maps help us debug TypeScript code in the browser, even though TypeScript is converted into JavaScript before running.

// A source map creates a connection between:

// TypeScript (.ts)
//        ↕
// JavaScript (.js)

// So when you put a breakpoint in your .ts file, the debugger can show the original TypeScript code and let you debug it directly.

