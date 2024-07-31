// Define a base class Shape with a method draw. Create two subclasses Circle and Rectangle that override
// the draw method. Demonstrate polymorphism using instances of these classes.


class Shape
{
    draw(){
        console.log("Please Draw the shape");
    }
}
class Circle extends Shape{
    draw(){
        console.log("Please draw the circle");
    }
}

class Rectangle extends Shape{
    draw(){
        console.log("Please draw the Rectangle");
    }
}

let obj1 = new Shape();
let obj2 = new Circle();
let obj3 = new Rectangle();

obj2.draw()
obj3.draw()