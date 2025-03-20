import express from "express";
import {buildResponse} from "../controller/ControllerBase";


export function middlewareAuthenticated(req:express.Request,res:express.Response,next: express.NextFunction) {


    const token = req.header("application-token")
    if (token !== "secret-token"){

         res.status(401).json(buildResponse({
             isSuccess: false,
             message: "unauthorized",
         }))

        return
    }

    next();



}