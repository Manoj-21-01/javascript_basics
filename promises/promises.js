//In js promises are special objects that help to perform asynchnorus operations

//program 1 --that gives certain value

let promise = new Promise(function(resolve,reject){
    let data = "I am a promise";
    resolve(data);
});

let promisePrints = () =>{
    promise.then(function(result){
        console.log(result);
    });
}

promisePrints(); 

//program 2 --which is example using catch/ gives error

let promise1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        reject(new Error("This will delay for a few seconds"));
    },2000);
});

promise1.catch(result => console.log(result.message));