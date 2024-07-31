// Create a constructor Employee that inherits from the Person constructor of problem 1. Add an additional
// property designation and a method getDetails to display the employee details.

function Person(name, age)
{
    this.name = name;
    this.age=age
}


function Employee(name, age, designation)
{
    Person.call(this,name, age)
    this.designation= designation;
}

let Person1 = new Person("Chander Shekhar", 33) 
let Employee1 = new Employee("Chander", 25, "Software Engineer")

console.log(Person1);
console.log(Employee1);