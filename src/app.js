const express = require("express");
const connectDb = require("./config/database");
const app = express();
const User = require("./models/user");


// express.json() acts as middleware for the app
// app.use will work for all the routes
// express.json() read json object and converts it to javascript object
// adds this javascript object back to the request(req) in the body. 
// then req.body is javascript object and read by express
app.use(express.json());

app.post("/signup", async(req,res) => {

    // console.log(req.body);
    // creating new instance of user model
    const user = new User(req.body);

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