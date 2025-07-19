const express = require("express");
const connectDb = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async(req,res) => {
    // creating new instance of user model
         const user = new User({
            firstName: "hello",
            lastName: "world",
            emailId: "api@helo.com",
            password: "testinghello"
         });

         try{
            await user.save();
            res.send("User added Successfully...");
         }catch(err){
            res.status(400).send("Error saving the user:" + err.message);
         }

});
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