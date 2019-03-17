"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Index_1 = require("./Index");
const Const_1 = require("../models/Const");
class Controllers {
    constructor() {
        this.list = new Map();
        this.list.set("index", new Index_1.default());
    }
    get Index() {
        let self = this;
        return function (req, res, next) {
            self.list.get("index").publish(req, res);
        };
    }
    get Assets() {
        let self = this;
        return function (req, res, next) {
            var locale = req.url.split("/");
            var url;
            if (locale[1] == "js" || locale[1] == "css" || locale[1] == "img") {
                url = `${Const_1.default.__DISTNAME}/${locale[1]}/${locale[2]}`;
            }
            else {
                url = `${Const_1.default.__DISTNAME}/${locale[1]}`;
            }
            console.log(url);
            res.sendFile(url);
        };
    }
}
exports.default = Controllers;
