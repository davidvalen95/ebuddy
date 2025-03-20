"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncHandler = asyncHandler;
exports.middlewareErrorHandler = middlewareErrorHandler;
const ControllerBase_1 = require("../controller/ControllerBase");
function asyncHandler(fn) {
    return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        try {
            yield fn(req, res, next);
        }
        catch (err) {
            next(err);
        }
    });
}
function middlewareErrorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json((0, ControllerBase_1.buildResponse)({
        isSuccess: false,
        message: "Something went wrong",
        data: {
            stack: err.stack,
            message: err.message,
            error: err,
        }
    }));
}
