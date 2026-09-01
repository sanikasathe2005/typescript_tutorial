console.log(Number.MAX_SAFE_INTEGER);

let bignum:bigint=67878766555344334429100n;
console.log(bignum);
console.log(typeof(bignum));


let big=BigInt(4536876542920202181872);
console.log(big);

//opeartions same as normal
let x=1000n;
let y=98754n;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);

//number vs bigint
//number: Handles standard numbers and decimals, but has a strict size limit (9,007,199,254,740,991).

//bigint: Handles massive integers (marked with an n), has no size limit, but cannot use decimals or mix directly with standard numbers in math.
