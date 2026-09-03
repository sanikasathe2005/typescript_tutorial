export class Employee {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    showInfo() {
        console.log(this.name);
    }
}
