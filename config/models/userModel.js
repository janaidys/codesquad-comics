const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: { 
        type: String
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: buffer
    },
    salt: {
        type: buffer
    },
    strategy: {
        type: String,
        required: true
    }
}) 

const User = mongoose.model(User, userSchema);
model.export = User;