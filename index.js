//MY FIRST NODE SERVER
const http = require('http');

//Define the location and port of the server. 
const hostname = '127.0.0.1';
const port = 3000;

//The createServer method of the http object allows us to define how the server will behave.
//The variables req and res correspond to the request and response objects of the server communications. 
//Each of these has a variety of properties and methods that we will explore in future lessons. 

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!\n');
})

//Finally, we need to tell the server to actually listen for communications. 
//We do this by calling the listen method of the server object we just created, and passing it the port and hostname we previously defined. 
//It also accepts a callback function that we can use to indicate that the server is running.

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})