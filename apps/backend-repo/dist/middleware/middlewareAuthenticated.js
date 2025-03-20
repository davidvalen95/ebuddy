"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middlewareAuthenticated = middlewareAuthenticated;
const ControllerBase_1 = require("../controller/ControllerBase");
function middlewareAuthenticated(req, res, next) {
    const token = req.header("application-token");
    if (token !== "secret-token") {
        res.status(401).json((0, ControllerBase_1.buildResponse)({
            isSuccess: false,
            message: "unauthorized",
        }));
        return;
    }
    next();
}
