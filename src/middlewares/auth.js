const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth =  async (req, res, next) => {
    try {
     const { token } = req.cookies;
     if(!token){
        res.status(401).send("Please Login");
     }

     //verify this token
     const decodedMessage = await jwt.verify(token,"Jwt@123parser");

     console.log(decodedMessage);
     const { _id } = decodedMessage;
     console.log("LOgged in user is: " + _id);

     const user = await User.findById(_id);
     if(!user){
        throw new Error("User not found");
     }
     req.user = user;
     next();
    }
    catch(err){
        res.status(400).send("ERROR " + err.message);
    }
};

module.exports = {
    userAuth
};