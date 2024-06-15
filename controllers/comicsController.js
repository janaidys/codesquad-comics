// const booksData = require("/data/data.js");

//Summoning the comics model?
const Comic = require('../models/comicsModel')

// get ALL comics
const getAllComics = async (request, response, next) => {
  try {
    if (200) {
      await Comic.find({})
        .then(comic=> 
        response.status(200).json({
        success: { message: "Found all comics!" },
        data: comic,
        statusCode: 200,
      }));
    }
  } catch (error) {
    response.status(400).json({
      error: { message: "Something went wrong getting all the comics!" },
      statusCode: 400,
    });
  }
};

// get ONE comic
const getComic = async (request, response, next) => {
  const {id} = request.params;
//   const foundBook = booksModel.find((book) => book.id === Number(id));

  try {
      await Comic.findOne({_id:id})
      .then(foundComic => {
      response.status(200).json({
        success: { message: "Found the comic you are looking for!" },
        data: foundComic,
        statusCode: 200});
      })
  } catch (error) {
    response.status(400).json({
      error: { message: "Something went wrong retrieving a comic!" },
      statusCode: 400,
    });
  }
};

// create a comic
const createComic = async (request, response, next) => {
    const { title, author, genre, pages, rating, synopsis } = request.body;

    const newComic = new Comic({
        title: title,
        author: author,
        genre: genre,
        pages: pages,
        rating: rating,
        synopsis: synopsis,
      });
    
    await newComic.save();

    try {
        response.status(201).json({success: "A new comic is created", data: newComic, statusCode: 201 });
    } catch (error) {
        response.status(400).json({error: "Something went wrong creating a comic", statusCode: 400 });
    }
};

// edit a comic 
const editComic = async (request, response, next) => {
    const {id} = request.params; 

    const { title, author, genre, pages, rating, synopsis } = request.body;

    await Comic.findByIdAndUpdate({id}, {
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
                success: 'Comic is updated',
                data: newComic,
                statusCode: 201
              });
        } catch (error) {
            response.status(400).json({ error: "Something went wrong while editing the comic", statusCode: 400});
        }
}

// delete a comic 

const deleteComic = async (request, response, next) => {
    const {id} = request.params; 

    await Comic.findByIdAndDelete("id");

    try {
        response.status(200).json({success:"Comic deleted successfully!", statusCode: 200})
    } catch (error) {
        response.status(400).json({error:"Something went wrong while deleting the comic!", statusCode:400})
        
    }
}

module.exports = {getAllComics, getComic, createComic, editComic, deleteComic}