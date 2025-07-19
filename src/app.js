const express = require("express");

const app = express();

const { adminAuth, adminUser} = require("./middlewares/auth");

app.use("/admin",adminAuth);

app.use("/user",adminUser);

app.get("/user",(req,res)=> {
    res.send("User data send");
});

// since user is a single route we can skip line no app.use("/user",adminUser); and write as below
// app.get("/user",adminUser, (req,res)=> {
//     res.send("User data send");
// });
app.get("/user/login",(req,res)=> {
    res.send("User login");
});


app.get("/admin",(req,res)=> {
    res.send("Admin access");
});

app.get("/admin/getAllData", (req , res) => {
    res.send("Fetch admin data ");
});

app.get("/admin/deleteUser", (req , res) => {
    res.send("User Deleted");
});
// // part 1
// app.use("/try",(req,res) => {
//     console.log("handling route user 1");
//     next();
// });

// app.use("/try",(req,res) => {
//     console.log("handling route user 2");
//     res.send("Respond 2");
// });


// //part 2
// app.use("/try",(req,res) => {
//     console.log("handling route user 2");
//   //  res.send("Respond 2");
//     next();
// });

// app.use("/try",(req,res) => {
//     console.log("handling route user 1");
//     next();
// });

// // result cannot get 


// //part 3
// app.get("/try",(req,res,next) => {
//     console.log("handling route user 1");
//     next();
// },(req,res,next) => {
//     console.log("handling route user 1");
//     next();
// },(req,res) => {
//     console.log("handling route user 1");
//     res.send("Send data");
// }
// );






app.listen(7777, () => {
    console.log("Server at 7777...");
});