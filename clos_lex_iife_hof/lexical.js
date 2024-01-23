//lexical scope defines to access variables from outside of function to inner function

function outer(name,age){
    // let name = "john";
    // let age = 22;
    function inner(){
        console.log("Hello, " + name);
        console.log("You are " + age + "years old");
    }
    inner();
}

outer("john",22)