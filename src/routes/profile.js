const express = require("express");
const profileRouter = express.Router();
const {userAuth} = require("../middlewares/auth");
const {validateEditData} = require("../utils/validation");

profileRouter.get("/profile/view",userAuth, async(req,res) => {
    try {
        const user = req.user;

       res.send(user);
    } catch (error) {
        res.status(400).send("ERROR " + err.message);
    }
});

profileRouter.patch("/profile/edit",userAuth, async(req,res) =>{
     try{
           if(!validateEditData(req)){
            throw new Error("Invalid Edit request!");
           }

           const loggedInUser = req.user;
           //console.log(loggedInUser);
           Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));
           //console.log(loggedInUser);
           await loggedInUser.save();
           
            //    res.send("User Profile Successfully Updated!");
            //    res.send(`${loggedInUser.firstName}, your profile is updated successfully`);
           res.json({
            message:`${loggedInUser.firstName}, your profile is updated successfully`,
            data:loggedInUser
           })

     }
     catch(err){
        res.status(400).send("ERROR "+ err.message);

     }
});

// Need to create api
// profileRouter.post("/profile/forgetpassword",userAuth, async(req,res) => {
// })

module.exports = profileRouter;