import express, {Express, Request, Response, Router} from "express";
import {routeUser} from "./routeUser";
import {middlewareAuthenticated} from "../middleware/middlewareAuthenticated";
import { EntityBase } from "@repo/library/src/entity";

export function routeInit(app: Express) {


    initAuthenticatedRoute(app);
    initPublicRoute(app);


}


function initAuthenticatedRoute(app: Express) {
    const authenticatedRouter = Router();
    app.use(authenticatedRouter);

    authenticatedRouter.use(middlewareAuthenticated);

    authenticatedRouter.use('/user',routeUser);

}

function initPublicRoute(app: Express) {
    const publicRoute = Router();
    app.use(publicRoute);


}
