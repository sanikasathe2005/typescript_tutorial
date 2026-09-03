namespace App{
    export function greet()
    {
        console.log("wlc");
        
    }
}
App.greet();

namespace user{
    export const company="parallel minds";
    export function login()
    {
        console.log("logged in");
        
    }
}
console.log(user.company);
console.log(user.login());


namespace Company2{
    export namespace HR{
        export function hire()
        {
            console.log("hiring emp");
            
        }
    }
}
Company2.HR.hire();