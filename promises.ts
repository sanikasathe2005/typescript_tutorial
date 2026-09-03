//promises=>A Promise in TypeScript is an object that represents the eventual completion or failure of an asynchronous operation. It can be in one of three states: pending, fulfilled, or rejected.

const msgPromise:Promise<string>=new Promise((resolve)=>
{
    setTimeout(()=>
    {
        resolve("welcome ")
    },2000)
})
msgPromise.then((message)=>{
    console.log(message);
    
})

//asycn await=>
//async and await are keywords used to work with Promises. async makes a function return a Promise, while await waits for a Promise to resolve and gives us its result.
function getMessage(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello, Welcome!");
        }, 2000);
    });
}

async function showMessage() {
    const message = await getMessage();
    console.log(message);
}

showMessage();
