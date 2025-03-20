"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerUser = void 0;
const firestore_1 = require("firebase/firestore");
const RepositoryUser_1 = require("../../repository/RepositoryUser");
const ControllerBase_1 = require("../ControllerBase");
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield RepositoryUser_1.repositoryUserInstance.getData([
            ...(req.query.name && [(0, firestore_1.where)('name', '==', req.query.name)] || []),
        ]);
        res.json((0, ControllerBase_1.buildResponse)({
            message: "Users Fetched",
            data: { users }
        }));
    });
}
function patchUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const document = req.body; // in proper handling is with validation
        yield RepositoryUser_1.repositoryUserInstance.setData([
            document,
        ]);
        res.json((0, ControllerBase_1.buildResponse)({
            data: { document },
            message: "Transaction succeed"
        }));
    });
}
exports.ControllerUser = {
    getUsers,
    patchUsers,
};
