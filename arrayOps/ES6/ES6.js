//ECMAScript 2015 is the second major version of js

// let x = 10;
// {
//     let x = 2;
// }
// console.log(x);

// var num = 5;
// {
//     var num = 20;
// } // x is 20 b'coz we declared num under var which is a global scope
// console.log(num);

// // multiplication using function in ES6
// const multiplication = (x,y) => {return x*y};
// console.log(multiplication(4,8)); //returns 32

// //spread (...) operator

// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May" ,"June"];
// const year = [...q1,...q2];
// console.log(year);

// const nums = [1,2,3,4];
// for (const num of nums){
//     console.log(num);
// }

const data = new Map([
    ["names",1000],
    ["available",1500],
    ["types",500]
])
console.log(data.get("names"));

//sets used to add the data to the variable

//class 

class Car{
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
}

const myCar1 = new Car("ford",1969);
console.log(myCar1.name,myCar1.year);