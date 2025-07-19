const express = require("express");

const app = express();


// app.use("/try",(req,res) => {
//     console.log("handling route user 1");
//     res.send("Respond 1");
// }, (req,res) => {
//      console.log("handling route user 2");
//     res.send("Respond 2");

// });

// app.use("/try",(req,res,next) => {
//     console.log("handling route user 1");
//     res.send("Respond 1");
//     next();
// }, (req,res,next) => {
//      console.log("handling route user 2");
//     res.send("Respond 2");

// });

// app.use("/try",(req,res,next) => {
//     console.log("handling route user 1");
//    // res.send("Respond 1");
//     next();
// }, (req,res,next) => {
//      console.log("handling route user 2");
//     res.send("Respond 2");

// });

// app.use("/try",(req,res,next) => {
//     console.log("handling route user 1");
//    // res.send("Respond 1");
//     next();
//     }, (req,res,next) => {
//         console.log("handling route user 2");
//         res.send("Respond 2");
//         next();
//     },(req,res,next) => {
//         console.log("handling route user 3");
//         res.send("Respond 3");

//     },(req,res,next) => {
//         console.log("handling route user 4");
//         res.send("Respond 4");

//     }
// );


// app.use("/try",(req,res,next) => {
//     console.log("handling route user 1");
//    // res.send("Respond 1");
//     next();
//     }, (req,res,next) => {
//         console.log("handling route user 2");
//      //   res.send("Respond 2");
//         next();
//     },(req,res,next) => {
//         console.log("handling route user 3");
//         res.send("Respond 3");
//         next();
//     },(req,res,next) => {
//         console.log("handling route user 4");
//         res.send("Respond 4");

//     }
// );

// app.use("/try",(req,res,next) => {
//     console.log("handling route user 1");
//    // res.send("Respond 1");
//     next();
//     }, (req,res,next) => {
//         console.log("handling route user 2");
//      //   res.send("Respond 2");
//         next();
//     },(req,res,next) => {
//         console.log("handling route user 3");
//       //  res.send("Respond 3");
//         next();
//     },(req,res,next) => {
//         console.log("handling route user 4");
//         res.send("Respond 4");

//     }
// );

// app.use("/try",(req,res,next) => {
//     console.log("handling route user 1");
//    // res.send("Respond 1");
//     next();
//     }, (req,res,next) => {
//         console.log("handling route user 2");
//      //   res.send("Respond 2");
//         next();
//     },(req,res,next) => {
//         console.log("handling route user 3");
//       //  res.send("Respond 3");
//         next();
//     },(req,res,next) => {
//         console.log("handling route user 4");
//      //   res.send("Respond 4");
//         next();
//     }
// );


// Multiple route handlers
app.use("/router",[rH1,rH2],rH3);
app.use("/router",rH1,[rH2,rH3]);

app.use("/try",[(req,res,next) => {
    console.log("handling route user 1");
   // res.send("Respond 1");
    next();
    }, (req,res,next) => {
        console.log("handling route user 2");
     //   res.send("Respond 2");
        next();
    },(req,res,next) => {
        console.log("handling route user 3");
      //  res.send("Respond 3");
        next();
    },(req,res,next) => {
        console.log("handling route user 4");
      //  res.send("Respond 4");
       next();
    }
]);




// use regrex or other methods like + ,(),*
// app.get("/user/:userId/:name/:password", (req, res) => {
//     res.set('Cache-Control', 'no-store');
//     res.send({firstname:"Raja", lastname:"Manish"});
// });

// // order of routing matters && this will match all HTTP methods
// app.use("/user", (req, res) => {
//     res.set('Cache-Control', 'no-store');
//     res.send("order matters");
// });

// app.get("/user", (req, res) => {
//     res.set('Cache-Control', 'no-store');
//     res.send({firstname:"Raja", lastname:"Manish"});
// });

// app.post("/user", (req, res) => {
//     //saving to db
//     res.set('Cache-Control', 'no-store');
//     res.send("User created successfully");
// });

// app.delete("/user", (req, res) => {
//     res.set('Cache-Control', 'no-store');
//     res.send("User successfully deleted");
// });

// app.patch("/user", (req, res) => {
//     res.set('Cache-Control', 'no-store');
//     res.send("User successfully updated");
// });

// // order of routing matters
// app.use("/rest/1", (req, res) => {
//     res.set('Cache-Control', 'no-store');
//     res.send("Hello from Rest 1111");
// });

// app.use("/rest", (req, res) => {
//     res.set('Cache-Control', 'no-store');
//     res.send("Hello from Rest");
// });



// app.use("/", (req, res) => {
//     res.send("Hello from Express");
// });

app.listen(7777, () => {
    console.log("Server at 7777...");
});

// curl http://localhost:7777/this
// curl http://localhost:7777/rest
// curl http://localhost:7777/