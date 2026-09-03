import {company,greet} from "./modules.ts";
import { Employee } from "./emp.ts";
import add from "./math.ts";//defaut=>no curly braces
import * as Utils from "./utils.ts";//import all from file
console.log(company);
console.log(greet("sanika"));

const emp=new Employee("sanika");
emp.showInfo();

console.log(add(7,9));
console.log(Utils.PI);
console.log(Utils.square(9));


