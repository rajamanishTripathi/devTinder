const express = require("express");
const connectDb = require("./config/database");
const app = express();
const User = require("./models/user");
const { default: mongoose } = require("mongoose");
const {validateSignupData} = require("./utils/validation");
const bcrypt = require("bcrypt");


// express.json() acts as middleware for the app
// app.use will work for all the routes
// express.json() read json object and converts it to javascript object
// adds this javascript object back to the request(req) in the body. 
// then req.body is javascript object and read by express
app.use(express.json());

app.post("/signup", async(req,res) => {

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
    await user.save();
    res.send("User added Successfully...");
    }catch(err){
    res.status(400).send("Error saving the user:" + err.message);
    }

});

app.post("/login", async (req,res) => {
    
    try{
        const {emailId , password} = req.body;
        const user = await User.findOne({emailId: emailId});
       console.log(user);
       if(!user){
        throw new Error("Invalid credentails");
       }

       const isPasswordValid = await bcrypt.compare(password, user.password);
       if(isPasswordValid){
           res.send("Login  Successful yeahhhhhhh");
       }else{
         throw new Error("Invalid credentails");
       }
      
    }catch (err){
        res.status(400).send("Something went wrong....." + err.message);
    }
});

// for db operations for delete apis
app.delete("/user",async(req, res) => {
    const userId = req.body.userId;

    try{
       // await User.findByIdAndDelete({_id: userId});
        await User.findByIdAndDelete(userId);
        res.send("User Successfully Deleted");
      
    }catch(err){
        res.status(400).send('Something went wrong');
    }
});

//update api
// any other data that are not part of db schema  is ignored by apis and not inserted 
app.patch("/user/:userId",async(req, res) => {
    const userId = req.params?.userId;
    const data = req.body;
 
    try{
        const ALLOWED_UPDATE = ["about", "photourl", "gender", "age", "skills"];
        const isUpdateAllowed = Object.keys(data).every((k) => ALLOWED_UPDATE.includes(k));

        if(data.skills.length > 0){
            throw new Error ("skills cannot be more than 10");
        }

        if(!isUpdateAllowed){
            throw new Error("Update not Allowed");
        }

        const user =  await User.findByIdAndUpdate({_id: userId}, data,{ returnDocument:"before", runValidators:true});
            res.send("User Successfully Updated");   
            console.log(data);   
    }catch(err){
        res.status(400).send('Update failed:  ' + err.message);
    }
});



// get all users from database
app.get("/feed", async(req,res) =>{
         try {
            const users = await User.find({});
            res.send(users);
         } catch (error) {
            res.status(400).send("something went wrong");
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