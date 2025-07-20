const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required:true,
        minlength:3
    },
    lastName: {
        type: String
    },
    emailId: {
        type: String,
        required:true,
        unique:true,
        trim:true
    },
    password: {
        type: String,
        required:true
    },
    age: {
        type: Number,
        min:18
    },
    gender: {
        type: String,
        validate(value){
            if(!["male","female","other"].includes(value)){
                   throw new Error("Gender is not valid.");
            }
        }
    },
    photourl:{
         type: String,
         default: "https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460/"
    },
     about:{
         type: String,
         default: "this is by default"
    },
     skills:{
         type: [String]
    }
}, {timestamps:true});

const User = mongoose.model('User', userSchema);

module.exports = User;