"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middlewareCors = middlewareCors;
function middlewareCors(req, res, next) {
    res.setHeaders(new Map()
        .set("Access-Control-Allow-Headers", "*")
        .set("Access-Control-Allow-Origin", "*")
        .set("Access-Control-Allow-Methods", "*"));
    if (req.method === "OPTIONS") {
        res.status(200).end();
        return;
    }
    next();
}
