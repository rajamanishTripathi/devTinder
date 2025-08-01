const validator = require("validator");

const validateSignupData = (req) => {
    const { firstName, lastName, emailId, password} = req.body;

    if(!firstName || !lastName){
        throw new Error("Name is not valid");
    } else if(!validator.isEmail(emailId)){
        throw new Error("Email is not valid.");
    } else if (!validator.isStrongPassword(password)){
        throw new Error("Enter Strong Password");
    }
};

const validateEditData = (req) => {
    const allowedList = ["firstName","lastName","emailId","photourl","about","gender","skills"];
    
    const isEditAllowed = Object.keys(req.body).every((field) => allowedList.includes(field));

    return isEditAllowed;

}

module.exports = {validateSignupData,validateEditData};