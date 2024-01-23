//array declaration

const months = ["April", "May", "June"];
console.log(months);

const names = new Array("Nani", "David", "Rahul"); //new Array also does the same operation
console.log(names);

//arrayToString

const things = ["Laptop", "Book", "Cable"];
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