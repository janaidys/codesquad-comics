const mongoose = require("mongoose");


const comicSchema = new mongoose.Schema ({
    title: {
        type: String
    }, 
    author: {
        type: String
    }, 
    publisher: {
        type: String
    },
    genre: {
        type: String
    },
    pages: {
        type: Number
    },
    rating: {
        type: Number
    },
    synopsis: {
        type: String
    },
    image: {
        type: String
    },
})

const Comic = mongoose.model('Comic', comicSchema);

module.exports = Comic;