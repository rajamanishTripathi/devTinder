const mongoose = require("mongoose");
//devTinder is a db
const connectDb = async() => {
    await mongoose.connect("mongodb+srv://nodejs:BLhlYKgmbVDjupEY@namaste-node.lyconuo.mongodb.net/devTinder");
};

module.exports = connectDb;
