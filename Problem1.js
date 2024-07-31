// Create an object constructor Person that takes name and age as parameters and initializes them. Also, add
// a method sayHello to greet the person.

function Person(name, age)
{
    this.name = name;
    this.age=age
}

const values = new  Person("Shekhar", 33)

function sayHello()
{
    console.log(`Hello ${values.name}`);
}
sayHello();