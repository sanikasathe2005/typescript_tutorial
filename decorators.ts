// ================================
// 1. CLASS DECORATOR
// ================================

function Logger(target: Function) {
    console.log("Class created:", target.name);
}

@Logger
class User {
    
    // ================================
    // 2. PROPERTY DECORATOR
    // ================================

    @LogProperty
    name: string = "Sanika";


    // ================================
    // 3. METHOD DECORATOR
    // ================================

    @LogMethod
    login() {
        console.log("Logged in");
    }
}


// Property decorator
function LogProperty(target: any, propertyKey: string) {
    console.log("Property:", propertyKey);
}


// Method decorator
function LogMethod(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    console.log("Method:", propertyKey);
}


// Create object
const user = new User();

console.log(user.name);
user.login();
