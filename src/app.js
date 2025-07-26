const express = require("express");
const connectDb = require("./config/database");
const app = express();
const cookieParser = require("cookie-parser");



// express.json() acts as middleware for the app
// app.use will work for all the routes
// express.json() read json object and converts it to javascript object
// adds this javascript object back to the request(req) in the body. 
// then req.body is javascript object and read by express
app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");

app.use("/",authRouter);
app.use("/",profileRouter);
app.use("/",requestRouter);


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