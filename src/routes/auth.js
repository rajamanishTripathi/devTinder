const express = require("express");
const authRouter = express.Router();

const {validateSignupData} = require("../utils/validation");
const bcrypt = require("bcrypt");
const User = require("../models/user");

authRouter.post("/signup", async(req,res) => {

    validateSignupData(req);

    const {firstName, lastName, emailId, password} = req.body;

    const passwordHash = await bcrypt.hash(password, 10);

    // console.log(req.body);
    // creating new instance of user model
    const user = await new User({
        firstName,
        lastName,
        emailId,
        password: passwordHash
    });

    try{
    const savedUser = await user.save();
     const  token = await savedUser.getJWT();

    //Add token to cookie and send response back to user 
    res.cookie("token",token,{ expires: new Date(Date.now() + 8 * 3600000) }); // cookie expire in 8 hours
    
    res.json( { message:  "User added Successfully...", data: savedUser} );
    }catch(err){
    res.status(400).send("Error saving the user:" + err.message);
    }

});

authRouter.post("/login", async (req,res) => {
    
    try{
        const {emailId , password} = req.body;
        const user = await User.findOne({emailId: emailId});
        console.log(user);
        if(!user){
        throw new Error("Invalid credentails");
        }

       const isPasswordValid = await user.validatePassword(password);

       if(isPasswordValid){
        const  token = await user.getJWT();

        //Add token to cookie and send response back to user
        res.cookie("token",token,{ expires: new Date(Date.now() + 8 * 3600000) }); // cookie expire in 8 hours
        res.send(user);

        } else {
            throw new Error("Invalid credentails");
        }
      
    }catch (err){
        res.status(400).send("ERROR " + err.message);
    }
});

authRouter.post("/logout",async(req,res) =>{
     res
     .cookie("token",null, {
        expires: new Date(Date.now())
     })
     .send("Log Out");
});

module.exports = authRouter;