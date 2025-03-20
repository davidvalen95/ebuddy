"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeInit = routeInit;
const express_1 = require("express");
const routeUser_1 = require("./routeUser");
const middlewareAuthenticated_1 = require("../middleware/middlewareAuthenticated");
function routeInit(app) {
    initAuthenticatedRoute(app);
    initPublicRoute(app);
}
function initAuthenticatedRoute(app) {
    const authenticatedRouter = (0, express_1.Router)();
    app.use(authenticatedRouter);
    authenticatedRouter.use(middlewareAuthenticated_1.middlewareAuthenticated);
    authenticatedRouter.use('/user', routeUser_1.routeUser);
}
function initPublicRoute(app) {
    const publicRoute = (0, express_1.Router)();
    app.use(publicRoute);
}
