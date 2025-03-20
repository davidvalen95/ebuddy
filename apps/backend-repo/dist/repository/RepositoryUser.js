"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repositoryUserInstance = void 0;
const RepositoryBase_1 = require("./RepositoryBase");
class RepositoryUser extends RepositoryBase_1.RepositoryBase {
    constructor() {
        super(...arguments);
        this.collectionName = 'USERS';
    }
}
exports.repositoryUserInstance = new RepositoryUser();
