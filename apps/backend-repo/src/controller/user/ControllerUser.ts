import express from "express";
import { where } from "firebase/firestore";
import { repositoryUserInstance} from "../../repository/RepositoryUser";
import {buildResponse} from "../ControllerBase";

async function getUsers(req: express.Request, res: express.Response) {
    const users = await repositoryUserInstance.getData(
        [
            ...(req.query.name && [where('name', '==', req.query.name)] || []),
        ]
    );
    res.json(buildResponse({
        message: "Users Fetched",
        data:{users}
    }))
}

async function patchUsers(req: express.Request, res: express.Response) {

    const document =   req.body // in proper handling is with validation
    await repositoryUserInstance.setData([
        document,
    ])
    res.json(buildResponse({
        data: {document},
        message: "Transaction succeed"
    }))
}


export const ControllerUser = {
    getUsers,
    patchUsers,
}