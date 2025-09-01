const socket = require("socket.io");

const initisaliseSocket = (server) =>{
     
        const io = socket(server, cors({
            origin:"http://localhost:5173",
            credentials:true
        }));

        io.on("connection", (socket) => {
            // Handle events
            socket.on("joinChat", () => {});

            socket.on("sendMessage", () => {});

            socket.on("disconnect", () => {});
        });

}

module.exports = initisaliseSocket;