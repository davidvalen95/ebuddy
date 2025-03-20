"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.backendRepo = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const route_1 = require("./route");
const middlewareErrorHandler_1 = require("./middleware/middlewareErrorHandler");
const middlewareCors_1 = require("./middleware/middlewareCors");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 9991;
app.use(middlewareCors_1.middlewareCors);
app.use(express_1.default.json());
(0, route_1.routeInit)(app);
app.use(middlewareErrorHandler_1.middlewareErrorHandler);
if (process.env.IS_DEVELOPMENT) {
    app.listen(port, () => {
        console.log(`[server]: Server is running at http://localhost:${port}`);
    });
}
const backendRepo = {
    app
};
exports.backendRepo = backendRepo;
