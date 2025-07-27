const express = require("express");
const requestRouter = express.Router();
const {userAuth} = require("../middlewares/auth");

requestRouter.post("/request/send/:request/:toUserId",userAuth, async(req,res) => {
    try{
        const fromUserId = req.user._id;
        const toUserId = req.params.toUserId;
        const status = req.params.status;

    }
    catch(err){

    }
});

module.exports = requestRouter;