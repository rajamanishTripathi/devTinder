const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


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
            trim:true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error ("Invalid Email." + value);
                }
            }
            
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
            default: "https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460/",
            validate(value){
                if(!validator.isURL(value)){
                    throw new Error ("Invalid Url." + value);
                }
            }
        },
        about:{
            type: String,
            default: "this is by default"
        },
        skills:{
            type: [String]
        }
        }, 
        {timestamps:true});


userSchema.index({firstName:1,lastName:1});
userSchema.index({gender:1});

userSchema.methods.getJWT = async function(){
    const user = this;
    //Create a JWT 
    const token = await jwt.sign({_id: user._id}, "Jwt@123parser", {expiresIn:"1d"});
    return token;
};
userSchema.methods.validatePassword = async function(passwordInputByUser){
     
    const user = this;
    const passwordHash = user.password;
    const isPasswordValid = await bcrypt.compare(passwordInputByUser, passwordHash);
    return isPasswordValid;
};

const User = mongoose.model('User', userSchema);

module.exports = User;