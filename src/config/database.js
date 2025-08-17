const mongoose = require("mongoose");
//devTinder is a db
const connectDb = async() => {
    await mongoose.connect(process.env.DATABASE_CONNECTION_SECRET);
};

module.exports = connectDb;
