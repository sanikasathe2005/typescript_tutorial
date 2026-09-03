// A module is a separate file that contains code such as variables, functions, classes, etc. 
// We can share that code with other files using export and import.
//export makes variables, functions, classes, or other members available outside a file, while import allows us to use those exported members in another file.
//export default is used to export one main value, function, class, or object from a module. When importing a default export, we don't use curly braces, and we can choose any name for the imported value.”
//* is used to import all exported members from a module.
export const company="Parallel Minds";
export function greet(name:string)
{
return `welcome ${name}`;
}