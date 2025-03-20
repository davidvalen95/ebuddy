"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeUser = void 0;
const express_1 = __importDefault(require("express"));
const ControllerUser_1 = require("../controller/user/ControllerUser");
const middlewareErrorHandler_1 = require("../middleware/middlewareErrorHandler");
exports.routeUser = express_1.default.Router();
exports.routeUser.post("/update-user-data", (0, middlewareErrorHandler_1.asyncHandler)(ControllerUser_1.ControllerUser.patchUsers));
exports.routeUser.get("/fetch-user-data", (0, middlewareErrorHandler_1.asyncHandler)(ControllerUser_1.ControllerUser.getUsers));
