const express = require("express");

const app = express();


// case 1
// app.use("/",(err,req,res,next)=> {
//     if(err){
//     res.status(500).send("Error");
//     }
// });

// app.get("/getUserData",(req,res)=> {

//     throw new Error ('gggggg');
//     res.send("User data send");
// });

//case 2
// app.get("/getUserData",(req,res)=> {
// // logic of db call for getting user data
//     throw new Error ('Error getting data');
//     res.send("User data send");
// });
// // if there is error in any of the route and 
// // "/" is a wildcard match. it matches all patch
// app.use("/",(err,req,res,next)=> {
//     if(err){
//     res.status(500).send("something went wrong");
//     }
// });

// // case 3
// app.get("/getUserData",(req,res)=> {

//     try{
//     // logic of db call for getting user data
//     throw new Error ('Error getting data');
//     res.send("User data send");
//     }catch{
//        res.status(500).send("some error from the team");
//     }

// });
// app.use("/",(err,req,res,next)=> {
//     if(err){
//     res.status(500).send("something went wrong");
//     }
// });

// // case 4
// app.use("/",(err,req,res,next)=> {
//     if(err){
//     res.status(500).send("something went wrong");
//     }
// });

// app.get("/getUserData",(req,res)=> {

//     try{
//     // logic of db call for getting user data
//     throw new Error ('Error getting data');
//     res.send("User data send");
//     }catch{
//        res.status(500).send("some error from the team");
//     }

// });


// case 5
app.use("/",(err,req,res,next)=> {
    if(err){
    res.status(500).send("something went wrong");
    }
});

app.get("/getUserData",(req,res)=> {

  //  try{
    // logic of db call for getting user data
    throw new Error ('Error getting data');
    res.send("User data send");
    // }catch{
    //    res.status(500).send("some error from the team");
    // }

});
// if something breaks it will be caught in this below logic
// order (err,req,res,next) is very important
app.use("/",(err,req,res,next)=> {
    if(err){
    res.status(500).send("something went wrong");
    }
});



app.listen(7777, () => {
    console.log("Server at 7777...");
});