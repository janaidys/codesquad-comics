const express = require("express");
const router = express.Router();
const {getAllBooks, getBook, createBook, editBook, deleteBook} = require("../controllers/bookController")

// 5 NEW GET routes 

router.get("/", getAllBooks);
// (request, response, next) => {
//     response.status(200).json({success: {message: "This will send all of the book data"}, statusCode: 200});
//     });

router.get("/:id", getBook);
// (request, response, next) => {
//     response.status(200).json({success: {message: "This will send all of the books details data, or each book by their ID"}, statusCode: 200});
//      });

router.post("/create", createBook);
// (request, response, next) => {
//     response.status(200).json({success: {message: "This will send all of the data that will have the ability to create new books"}, statusCode: 200});
//     });

router.put("/edit/:id", editBook);
// (request, response, next) => {
//     response.status(200).json({success: {message: "This will send all of the update comic book form page data to modify a book by their ID"}, statusCode: 200});
//     });

router.delete("/delete/:id", deleteBook);
//  (request, response, next) => {
//     response.status(200).json({success: {message: "This will send all of the data that will have the ability to delete a book by their ID"}, statusCode: 200});
//     });

    module.exports = router;