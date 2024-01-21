//asynchorous means it executes with an delay
//method 1 using Browser APIs/Web APIs

//program 1
function f1(){
    console.log("J a v a s c r i p t");
}

function f2(){
    console.log("Js is fun");
}

f1();
setTimeout(f2, 2000); //2000 is the milliseconds equivalent to 2 seconds

//program 2
function f1(){
    console.log("Asynchronous operation");
}

function f2(){
    f1();
    console.log("It executes with some delay");
}

function main(){
    f2();
    console.log("Invoking all functions with main");
}

function f3(){
    console.log("Observing js");
}

setTimeout(f3, 3500);
main();