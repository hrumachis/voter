"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const Controllers_1 = require("./controllers/Controllers");
class Router {
    constructor(express) {
        this.express = express;
        this.router = Express.Router();
        this.controllers = new Controllers_1.default();
        this.local = __dirname.split("dist")[0];
    }
    build() {
        this.router.get("/", this.controllers.Index);
        this.router.get("/*", this.controllers.Assets);
        this.router.get("/css/*", this.controllers.Assets);
        this.router.get("/js/*", this.controllers.Assets);
        this.router.get("/img/*", this.controllers.Assets);
        this.express.use(this.log);
        this.express.use(this.router);
    }
    log(req, res, next) {
        console.log("--------");
        console.log(req.method, new Date(), req.url);
        next();
    }
}
exports.default = Router;
;
