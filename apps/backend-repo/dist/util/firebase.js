"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseApp = void 0;
const app_1 = require("firebase/app");
const configFirebase_1 = require("../config/configFirebase");
const firebaseApp = (0, app_1.initializeApp)(configFirebase_1.configFirebase);
exports.firebaseApp = firebaseApp;
