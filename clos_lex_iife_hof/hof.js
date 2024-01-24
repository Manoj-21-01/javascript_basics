//hof has two definitions
//first def: it is a function that accepts functions as parameters

function f1(task){
    console.log(task);
}

function f2(data,callback){
    for (let i=0;i<data.length;i += 1){
        callback(data[i])
    }
}

f2([1,2,3],f1);

//second def: to return a function like map,filter and reduce

const numbers = [1,2,3];
console.log(numbers.map((n) => n*2));
console.log(numbers.filter((n) => n*4));
console.log(numbers.reduce((a,b)=>a+b));
