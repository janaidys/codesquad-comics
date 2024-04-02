// Require dependencies 
const express = require('express');
const morgan = require('morgan');


//variables
const app = express();
const PORT = 3000; 

//middleware

app.use(morgan());

// 5 GET paths 

app.get("/", (request, response, next) => {
    //response.send("This route points to the Home page")
    response.status(200).json({success: {message: "This route points to the Home page"}, statusCode: 200});
});

app.get("/about", (request, response, next) => {
    //response.send("This route points to the About page")
    response.status(200).json({success: {message: "This route points to the About page"}, statusCode: 200});
});

app.get("/login", (request, response, next) => {
    //response.send("This route points to the Login page")
    response.status(200).json({success: {message: "This route points to the Login page"}, statusCode: 200});
});

app.get("/admin", (request, response, next) => {
    //response.send("This route points to the Admin page")
    response.status(200).json({success: {message: "This route points to the Admin page"}, statusCode: 200});
});

app.get("/admin/create-book", (request, response, next) => {
    //response.send("This route points to the Create Book page")
    response.status(200).json({success: {message: "This route points to the Create Bok page"}, statusCode: 200});
});

// Server
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
    //go to localhost 
    console.log(`http://localhost:${PORT}/`);
});



