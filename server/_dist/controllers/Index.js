"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Const_1 = require("../models/Const");
class Index {
    constructor() {
        this.htmlUrl = `${Const_1.default.__DISTNAME}/index.html`;
    }
    publish(req, res) {
        console.log(new Date(), req.method, req.url);
        console.log(this.htmlUrl);
        console.log(Const_1.default.__DIRNAME);
        try {
            console.log(`SEND ${this.htmlUrl}`);
            res.sendFile(this.htmlUrl);
            return true;
        }
        catch (err) {
            console.log(err);
            return false;
        }
    }
}
exports.default = Index;
