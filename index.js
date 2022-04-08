const http = require("http");


//1. creating server

//a single API : application programming interface


//this is single api

// http.createServer(function(request, response){
//     // response.write("Hello All");
//     response.write('<h1>hello all</h1>')
//     response.end();
// }).listen(4000)

//another method

// http.createServer(()=>{

// })

http
  .createServer(function (request, response) {
    
    let user = { name: "vishal", age: 22 };
    response.write("Hello All");
    response.write(JSON.stringify(user));
    response.end();     //closing server
  })
  .listen(4000);
