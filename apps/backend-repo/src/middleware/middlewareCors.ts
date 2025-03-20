import express from "express";


export function middlewareCors(req:express.Request,res:express.Response,next: express.NextFunction) {


    res.setHeaders(new Map()
        .set("Access-Control-Allow-Headers", "*")
        .set("Access-Control-Allow-Origin", "*")
        .set("Access-Control-Allow-Methods", "*")
    );

    if (req.method === "OPTIONS") {
        res.status(200).end();
        return;
    }



    next();



}