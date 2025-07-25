const express = require("express");
const connectDb = require("./config/database");
const app = express();
const User = require("./models/user");
const { default: mongoose } = require("mongoose");

const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");


// express.json() acts as middleware for the app
// app.use will work for all the routes
// express.json() read json object and converts it to javascript object
// adds this javascript object back to the request(req) in the body. 
// then req.body is javascript object and read by express
app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/requests");







// for db operations for delete apis
// app.delete("/user",async(req, res) => {
//     const userId = req.body.userId;

//     try{
//        // await User.findByIdAndDelete({_id: userId});
//         await User.findByIdAndDelete(userId);
//         res.send("User Successfully Deleted");
      
//     }catch(err){
//         res.status(400).send('Something went wrong');
//     }
// });

// //update api
// // any other data that are not part of db schema  is ignored by apis and not inserted 
// app.patch("/user/:userId",async(req, res) => {
//     const userId = req.params?.userId;
//     const data = req.body;
 
//     try{
//         const ALLOWED_UPDATE = ["about", "photourl", "gender", "age", "skills"];
//         const isUpdateAllowed = Object.keys(data).every((k) => ALLOWED_UPDATE.includes(k));

//         if(data.skills.length > 0){
//             throw new Error ("skills cannot be more than 10");
//         }

//         if(!isUpdateAllowed){
//             throw new Error("Update not Allowed");
//         }

//         const user =  await User.findByIdAndUpdate({_id: userId}, data,{ returnDocument:"before", runValidators:true});
//             res.send("User Successfully Updated");   
//             console.log(data);   
//     }catch(err){
//         res.status(400).send('Update failed:  ' + err.message);
//     }
// });



// // get all users from database
// app.get("/feed", async(req,res) =>{
//          try {
//             const users = await User.find({});
//             res.send(users);
//          } catch (error) {
//             res.status(400).send("something went wrong");
//          }
// });


// start listening/making api call after connecting to database
connectDb()
    .then(() => {
        console.log("Database connection Successful....");
        app.listen(7777, () => {
            console.log("Server at 7777...");
        });
    })
    .catch((err) => {
        console.error("Database connection failed.");
});