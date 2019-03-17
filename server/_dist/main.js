"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const http = require("http");
const router_1 = require("./router");
class App {
    constructor() {
        this.port = 5500;
        this.express = Express();
        this.http = http.createServer(this.express);
        this.router = new router_1.default(this.express);
    }
    build() {
        let self = this;
        this.router.build();
        this.http.listen(process.env.PORT || this.port, function () {
            console.log('Node app is running on port', process.env.PORT || self.port);
        });
    }
}
var app = new App();
app.build();
