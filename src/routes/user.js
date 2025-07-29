const express = require("express");
const userRouter = express.Router();

const {userAuth} = require("../middlewares/auth");
const ConnectionRequest = require("../models/connectionRequest");

const USER_DATA = "firstName lastName age skills gender";

// Get all the pending connection request
userRouter.get("/user/requests/received", userAuth, async(req,res) =>{
    try {
        const loggedInUser = req.user;

        const connectionRequests = await ConnectionRequest.find({
              toUserId: loggedInUser._id,
              status: "interested"
      //  }).populate("fromUserId",["firstName","lastName"]);
      }).populate("fromUserId",USER_DATA);
      //  }).populate("fromUserId");

        res.json({
            message:"Data Fetched Successfully",
            data: connectionRequests
        });

    } catch (err) {
        res.status(400).send("ERROR:  "+ err.message );
    }
});

userRouter.get("/user/connections", userAuth , async(req,res) => {
          try{
              const loggedInUser = req.user;

              const connectionRequests = await ConnectionRequest.find({
                $or: [
                    {toUserId: loggedInUser._id, status: "accepted"},
                    {fromUserId: loggedInUser._id, status: "accepted"}
                ]
              }).populate("fromUserId",USER_DATA).populate("toUserId",USER_DATA);

              const data = connectionRequests.map((row) => {
                if(row.fromUserId._id.toString() === loggedInUser._id.toString()){
                       return row.toUserId;
                }
                 return row.toUserId;
              });

              res.json({data});
          }
          catch(err){
             res.status(400).send("ERROR:  "+ err.message );
          }
});

module.exports = userRouter;