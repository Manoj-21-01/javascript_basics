//async is used to return a promise
//await is used to wait and handle a promise

async function display(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("Returning promise in async");
        },200);
    });
};

async function result(){
    const data = await display();
    console.log(data);
}

result();

//the above program will only executes when async and await used together

//program to multiply two numbers using async await

async function numbers(a,b){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(a*b);
        },1500);
    });
};

async function displayResult(){
    let values = await numbers(5,6);
    console.log(values);
}

displayResult();