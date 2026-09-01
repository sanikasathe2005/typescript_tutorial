const inputfield=document.getElementById("username") as HTMLInputElement;//typecasting
console.log(inputfield.value);

const button = document.getElementById("btn") as HTMLButtonElement;
button.addEventListener("click",()=>{
    const val=inputfield.value;
    if(val.trim()==="")
    {
        alert("plz enter name");
    }
    else{
        console.log(val);
        
    }
    
    
})