//iife - immediately invoked function expression
//iife is a function that is immediately called after it is defined.

const counter = (function(){
    let count = 0;
    return function(){
        count += 1;
        return count;
    };
})();

console.log(counter());

//each time you call the function the counter variable will be incremented by 1.
//if we call 3 times the output will be 1 2 3