// const booksData = require("/data/data.js");

//Summoning the book model?
const bookModel = require('../models/bookModel')

// get ALL books
const getAllBooks = async (request, response, next) => {
  try {
    if (200) {
      await Book.find({})
        .then(books=> 
        response.status(200).json({
        success: { message: "Found all books!" },
        data: books,
        statusCode: 200,
      }));
    }
  } catch (error) {
    response.status(400).json({
      error: { message: "Something went wrong getting all the books!" },
      statusCode: 400,
    });
  }
};

// get ONE book
const getBook = async (request, response, next) => {
  const {id} = request.params;
//   const foundBook = booksModel.find((book) => book.id === Number(id));

  try {
      await Book.findOne({_id:id})
      .then(foundBook => {
      response.status(200).json({
        success: { message: "Found the book you are looking for!" },
        data: foundBook,
        statusCode: 200});
      })
  } catch (error) {
    response.status(400).json({
      error: { message: "Something went wrong retrieving a book!" },
      statusCode: 400,
    });
  }
};

// create a book
const createBook = async (request, response, next) => {
    const { title, author, genre, pages, rating, synopsis } = request.body;

    const newBook = new Book({
        title: title,
        author: author,
        genre: genre,
        pages: pages,
        rating: rating,
        synopsis: synopsis,
      });
    
    await newBook.save();

    try {
        response.status(201).json({success: "A new book is created", data: newBook, statusCode: 201 });
    } catch (error) {
        response.status(400).json({error: "Something went wrong creating a book", statusCode: 400 });
    }
};

// edit a book 
const editBook = async (request, response, next) => {
    const {id} = request.params; 

    const { title, author, genre, pages, rating, synopsis } = request.body;

    await Book.findByIdAndUpdate({id}, {
        title,
        author,
        publisher,
        genre,
        pages,
        rating,
        synopsis
        }, {new: true});
    
        try {
            response.status(201).json({
                success: 'Book is updated',
                data: newBook,
                statusCode: 201
              });
        } catch (error) {
            response.status(400).json({ error: "Something went wrong while editing the book", statusCode: 400});
        }
}

// delete a book 

const deleteBook = async (request, response, next) => {
    const {id} = request.params; 

    await Book.findByIdAndDelete({id});

    try {
        response.status(200).json({success:"Book deleted successfully!", statusCode: 200})
    } catch (error) {
        response.status(400).json({error:"Something went wrong while deleting the book!", statusCode:400})
        
    }
}

module.exports = {getAllBooks, getBook, createBook, editBook, deleteBook}