const adminAuth =  (req, res, next) => {
    console.log("adminAuth checking");
    const token = "asd";
    const adminAuthorization = token === "asd";
    if(!adminAuthorization){
        res.status(401).send("Unauthorized request");
    } else {
        next();
    }
};

const adminUser =  (req, res, next) => {
    console.log(" user adminAuth checking");
    const token = "asd";
    const adminAuthorization = token === "asd";
    if(!adminAuthorization){
        res.status(401).send("Unauthorized request");
    } else {
        next();
    }
};

module.exports = {
    adminAuth,
    adminUser
};