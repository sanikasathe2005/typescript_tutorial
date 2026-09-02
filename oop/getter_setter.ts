//Getter is used to get a value, and Setter is used to set or update a value.


class User3{
    private _name="sanika";
    set name(value:string)
    {
        this._name=value;
    }
    get name()
    {
        return this._name;
    }
}
const  user=new User3();
user.name="pranali";
console.log(user.name);
