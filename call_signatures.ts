// Call Signatures in TypeScript
// A call signature describes the shape/type of a function without actually implementing the function.

type Add = {
    (a: number, b: number): number;
};

const sum: Add = (a, b) => {
    return a + b;
};

console.log(sum(7, 8));

