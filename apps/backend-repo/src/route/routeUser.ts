import express from "express";
import {ControllerUser} from "../controller/user/ControllerUser";
import {asyncHandler} from "../middleware/middlewareErrorHandler";


export const routeUser = express.Router();



routeUser.post("/update-user-data",asyncHandler(ControllerUser.patchUsers))
routeUser.get("/fetch-user-data",asyncHandler(ControllerUser.getUsers))







