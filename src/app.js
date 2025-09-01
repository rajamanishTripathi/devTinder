const express = require("express");
const connectDb = require("./config/database");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const http = require("http");

require("dotenv").config();

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.use(express.json());
app.use(cookieParser());


const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");
const paymentRouter = require("./routes/payment");
const initisaliseSocket = require("./utils/socket");

app.use("/",authRouter);
app.use("/",profileRouter);
app.use("/",requestRouter);
app.use("/",userRouter);
app.use("/",paymentRouter);

const server = http.createServer("app");
initisaliseSocket(server);


// start listening/making api call after connecting to database
connectDb()
    .then(() => {
        console.log("Database connection Successful....");
        server.listen(7777, () => {
            console.log("Server at 7777...");
        });
    })
    .catch((err) => {
        console.error("Database connection failed.");
});