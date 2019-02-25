"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const auth_routes_1 = require("./auth/auth.routes");
class Server {
    constructor() {
        this.server = express();
        this.connectDb();
        this.applyMiddleware();
        this.mountRoutes();
    }
    connectDb() {
        const mongo = process.env.MONGO_URL;
        mongoose.connect(mongo, {
            useNewUrlParser: true,
            useCreateIndex: true
        });
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'MongoDB Connection error'));
    }
    applyMiddleware() {
        this.server.use(bodyParser.json());
        this.server.use(bodyParser.urlencoded({ extended: true }));
    }
    mountRoutes() {
        this.server.use('/auth', auth_routes_1.default);
    }
}
exports.default = new Server().server;
//# sourceMappingURL=server.js.map