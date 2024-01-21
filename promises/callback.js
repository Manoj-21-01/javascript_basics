//passing function as an argument to the another function is called callback and executes after the completion of specifc task

//function with callback function

function ticketBooking(name,age,callback){
    console.log("logging into website");
    setTimeout(function(){
        let status = "try again later";
        callback(status);
    },2000);
};

//callback function
ticketBooking("David", 22, function(status){
    console.log(status);
});


//function without callback
function ticketBooking(name,age){
    console.log("logging into website");
    setTimeout(function(){
        console.log("try again later");
    },2000);
};

ticketBooking("David", 22);

//finally callback provides more flexibility in handling the result of the asynchronous operation.