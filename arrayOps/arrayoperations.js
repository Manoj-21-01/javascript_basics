//array data_structures

const months = ["April", "May", "June"];
console.log(months);

const names = new Array("Nani", "David", "Rahul"); //new Array also does the same operation
console.log(names);

const colors = [];
colors[0] = "Blue";
colors[1] = "Green";
colors[2] = "Violet"
// console.log(colors);
console.log(colors instanceof Array); //output true

//arrayToString
const things1 = ["Laptop", "Book", "Cable"];
let res = things.toString();
console.log(res);
console.log(typeof(things)); //returns type of array: Object
console.log(things.sort());
console.log(things.length);
console.log(things[0]);
const personDetails = {firstName: "Manoj",lastName:"Veluru",age:21};
console.log(personDetails.firstName);

const fruits = ["Apple","Banana","Mango","Kiwi"];
let flen = fruits.length;
for (let i=0;i<flen;i++){
    console.log(fruits[i]);
}

//another way of using for loop to loop the elements
const num = [1,2,3,4,5];
for (const elements of num){
    console.log(elements);
}

//new element can be added to array using push or length property
let colors = ["Blue","Green","Yellow"];
colors.push("Violet");
colors[colors.length] = "Red";
console.log(colors)
console.log(Array.isArray(colors)); //returns true

const numbers = [1,2,3,4,5]
numbers.forEach(function(element){ //callback function
    console.log(element);
})

//map data structure

const things = new Map([
    ["books",1000],
    ["textbooks",5000],
    ["laptops",200],
    ["pens",200]
]);
things.set("computers",250);
console.log(things);
console.log(things.get('computers')); //get() method returns the value of a key in map
console.log(things.size) //returns the number of elements in a map
console.log(things.delete("pens"));
console.log(things);

console.log(things.clear());
console.log(things);

console.log(things.has("laptops"));

//maps are objects typeof returns object

console.log(typeof(things));
console.log(things instanceof Map);