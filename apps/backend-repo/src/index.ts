import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import {routeInit} from "./route";
import {middlewareErrorHandler} from "./middleware/middlewareErrorHandler";
import {middlewareCors} from "./middleware/middlewareCors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? 9991;

app.use(middlewareCors)
app.use(express.json());


routeInit(app)

app.use(middlewareErrorHandler)

if (process.env.IS_DEVELOPMENT) {
    app.listen(port, () => {
        console.log(`[server]: Server is running at http://localhost:${port}`);
    });
}

const backendRepo = {
    app
}

export {
    backendRepo
}