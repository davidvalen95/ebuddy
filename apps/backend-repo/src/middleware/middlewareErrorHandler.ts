import express from "express";
import {buildResponse} from "../controller/ControllerBase";



export  function asyncHandler (fn:  (req: express.Request, res: express.Response, next?: express.NextFunction) => Promise<any> ){

    return async ( req: express.Request, res: express.Response, next: express.NextFunction )=> {
        try{
            await fn(req,res,next)
        }catch(err){

            next(err)
        }
    }

}

export function middlewareErrorHandler(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {

    console.error(err.stack)
    res.status(500).json(buildResponse({
        isSuccess: false,
        message: "Something went wrong",
        data:{
            stack: err.stack,
            message: err.message,
            error: err,
        }
    }))

}