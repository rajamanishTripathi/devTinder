const express = require("express");

const app = express();

app.use("/this", (req, res) => {
    res.set('Cache-Control', 'no-store');
    res.send("Hi there");
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