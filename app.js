// packages 
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors')
const app = express();
const PORT = 3000; 

// define routing variables 
const bookRoutes = require('./routes/bookRoutes');
// const authRoutes = require('./routes/authRoutes');

//middleware

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// public directory is available
app.use(express.static(path.join(__dirname + "/public")));



// 5 GET paths 

// Should I be using this one (homework CCS-1)
app.get("/", (request, response, next) => {
    //response.send("This route points to the Home page")
    response.status(200).json({success: {message: "This route points to the Home page"}, statusCode: 200});
});

// Should I be using this one (homework CCS-3)
// app.get('/', (request, response, next) => {
//     response.status(200).json({success: {message: "Index successful"}, statusCode: 200});
//   })

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



// Route Paths
// app.use('/', authRoutes);

// Server
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
    //go to localhost 
    console.log(`http://localhost:${PORT}/`);
});
