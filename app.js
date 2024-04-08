// Require dependencies 
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors')


//variables
const app = express();
const PORT = 3000; 

//middleware

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// public directory is available
app.use(express.static(path.join(__dirname + "/public")));

// 5 GET paths 

app.get("/", (request, response, next) => {
    //response.send("This route points to the Home page")
    response.status(200).json({success: {message: "This route points to the Home page"}, statusCode: 200});
});

// app.get("/about", (request, response, next) => {
//     //response.send("This route points to the About page")
//     response.status(200).json({success: {message: "This route points to the About page"}, statusCode: 200});
// });

// app.get("/login", (request, response, next) => {
//     //response.send("This route points to the Login page")
//     response.status(200).json({success: {message: "This route points to the Login page"}, statusCode: 200});
// });

// app.get("/admin", (request, response, next) => {
//     //response.send("This route points to the Admin page")
//     response.status(200).json({success: {message: "This route points to the Admin page"}, statusCode: 200});
// });

// app.get("/admin/create-book", (request, response, next) => {
//     //response.send("This route points to the Create Book page")
//     response.status(200).json({success: {message: "This route points to the Create Book page"}, statusCode: 200});
// });

// 5 NEW GET routes 

app.get("/api/books", (request, response, next) => {
    response.status(200).json({success: {message: "This will send all of the book data"}, statusCode: 200});
    });

app.get("/api/books/:id", (request, response, next) => {
    response.status(200).json({success: {message: "This will send all of the books details data, or each book by their ID"}, statusCode: 200});
     });

app.get("/api/books/create/new", (request, response, next) => {
    response.status(200).json({success: {message: "This will send all of the data that will have the ability to create new books"}, statusCode: 200});
    });

app.get("/api/books/edit/:id", (request, response, next) => {
    response.status(200).json({success: {message: "This will send all of the update comic book form page data to modify a book by their ID"}, statusCode: 200});
    });

app.get("/api/books/delete/:id", (request, response, next) => {
    response.status(200).json({success: {message: "This will send all of the data that will have the ability to delete a book by their ID"}, statusCode: 200});
    });


// Server
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
    //go to localhost 
    console.log(`http://localhost:${PORT}/`);
});
