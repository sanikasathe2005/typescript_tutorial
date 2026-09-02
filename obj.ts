

//readonly and optional property
// A readonly property cannot be reassigned after the object is created.
let users: {//obj type
    readonly name: string,
    prn?: number
}

users = {
    name: "Sanika",
    prn: 20
}

console.log(users);
console.log(users.name);
console.log(users.prn);

// users.name = "Priya"; //  Error because name is readonly

// //2.optional
// users = {
//     name: "Sanika"
// }
//nested object
let products={
    prod_name:"laptop",
    price:5000,
    address:{
        city:"delhi",
        pincode:65987
    }
}
console.log(products.address.city);
console.log(products.address.pincode);

