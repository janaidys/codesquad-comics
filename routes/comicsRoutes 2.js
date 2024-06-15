const express = require("express");
const router = express.Router();
const {getAllComics, getComic, createComic, editComic, deleteComic} = require("../controllers/comicsController")

// 5 NEW GET routes 

router.get("/", getAllComics);
// (request, response, next) => {
//     response.status(200).json({success: {message: "This will send all of the book data"}, statusCode: 200});
//     });

router.get("/:id", getComic);
// (request, response, next) => {
//     response.status(200).json({success: {message: "This will send all of the books details data, or each book by their ID"}, statusCode: 200});
//      });

router.post("/create", createComic);
// (request, response, next) => {
//     response.status(200).json({success: {message: "This will send all of the data that will have the ability to create new books"}, statusCode: 200});
//     });

router.put("/edit/:id", editComic);
// (request, response, next) => {
//     response.status(200).json({success: {message: "This will send all of the update comic book form page data to modify a book by their ID"}, statusCode: 200});
//     });

router.delete("/delete/:id", deleteComic);
//  (request, response, next) => {
//     response.status(200).json({success: {message: "This will send all of the data that will have the ability to delete a book by their ID"}, statusCode: 200});
//     });

    module.exports = router;