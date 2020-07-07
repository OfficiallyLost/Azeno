class Person
{

    constructor(name, age)
    {

        if(!name || !age) throw new SyntaxError("Person constructor takes 2 parameters.");
        if(typeof name !== "string") throw new SyntaxError("Person name must be a string.");
        if(typeof age !== "number") throw new SyntaxError("Person age must be a number.");

        this.name = name;
        this.age = age;

    }

    getName() 
    {
        return this.name;
    }

    getAge()
    {
        return this.age;
    }

}

const John = new Person("John", 14);
console.log(John.getName());
console.log(John.getAge());
console.log(John);