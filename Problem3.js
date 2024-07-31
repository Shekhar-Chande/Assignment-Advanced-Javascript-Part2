// Create an object Calculator with methods add, subtract, multiply, and divide. Demonstrate the usage of this
// within these methods such that method chaining of add, subtract, multiply and divide is possible.

let Calculator={
    add: function(x,y){
        this.x=x;
        this.y=y;
        x+y
        return this
    },

    subtract: function(x,y)
    {
        this.x=x;
        this.y=y;
       x-y
       return this
    },

    multiply: function(x,y)
    {
        this.x=x;
        this.y=y;
        x*y
        return this
    },

    divide: function(x,y)
    {
        this.x=x;
        this.y=y;
        if(x>=y && x>=1  && y>=1)
        {
             x/y
             return this
        }
        else{
            console.log("Invalid Numbers");
        }
    }
}

Calculator.add(2,4).subtract(5,2).multiply(5*5).divide(4,2);
