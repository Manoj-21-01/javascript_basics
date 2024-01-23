//closures are functions having access to the parent function

var x = 10;
function outer_fn(){
    var y = 15;
    function inner_fn(){
        var z = 20;
        return x+y+z;
    }
    return inner_fn();
};

console.log(outer_fn());