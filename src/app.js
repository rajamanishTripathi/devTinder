const express = require("express");

const app = express();

app.get("/user/:userId/:name/:password", (req, res) => {
    res.set('Cache-Control', 'no-store');
    res.send({firstname:"Raja", lastname:"Manish"});
});

// order of routing matters && this will match all HTTP methods
app.use("/user", (req, res) => {
    res.set('Cache-Control', 'no-store');
    res.send("order matters");
});

app.get("/user", (req, res) => {
    res.set('Cache-Control', 'no-store');
    res.send({firstname:"Raja", lastname:"Manish"});
});

app.post("/user", (req, res) => {
    //saving to db
    res.set('Cache-Control', 'no-store');
    res.send("User created successfully");
});

app.delete("/user", (req, res) => {
    res.set('Cache-Control', 'no-store');
    res.send("User successfully deleted");
});

app.patch("/user", (req, res) => {
    res.set('Cache-Control', 'no-store');
    res.send("User successfully updated");
});

// order of routing matters
app.use("/rest/1", (req, res) => {
    res.set('Cache-Control', 'no-store');
    res.send("Hello from Rest 1111");
});

app.use("/rest", (req, res) => {
    res.set('Cache-Control', 'no-store');
    res.send("Hello from Rest");
});



app.use("/", (req, res) => {
    res.send("Hello from Express");
});

app.listen(7777, () => {
    console.log("Server at 7777...");
});

// curl http://localhost:7777/this
// curl http://localhost:7777/rest
// curl http://localhost:7777/