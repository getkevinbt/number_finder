const express = require("express");
const cors = require("cors");
const { createServer } = require("http");
require("colors");

const { socketController } = require("./socket");

class Server {
    constructor() {
        this.app = express().use(cors());
        this.port = 1000;
        this.server = createServer(this.app);
        this.io = require("socket.io")(this.server, {
            cors: {
                origin: [
                    "http://localhost:8081",
                    "http://192.168.1.67:8081",
                    "http://192.168.1.100:8081",
                ],
                methods: ["GET", "POST"],
            },
        });

        this.paths = {
            auth: "/api/auth",
            order: "/api/order",
        };

        //Middlewares
        this.middlewares();

        //Sockets
        this.sockets();
    }

    middlewares() {
        //Public Files
        this.app.use(express.static("public"));

        //Read and parse the body
        this.app.use(express.json());
    }

    sockets() {
        this.io.on("connection", socketController);
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log(
                `server running on port => ${String(this.port).blue}`.green
            );
        });
    }
}

module.exports = Server;
