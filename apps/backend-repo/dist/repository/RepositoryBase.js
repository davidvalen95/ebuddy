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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryBase = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const firestore_1 = require("firebase/firestore");
const configFirebase_1 = require("../config/configFirebase");
// firebaseApps previously initialized using initializeApp()
const app_1 = require("firebase/app");
(0, app_1.initializeApp)(configFirebase_1.configFirebase);
const db = (0, firestore_1.getFirestore)();
(0, firestore_1.connectFirestoreEmulator)(db, 'localhost', 9922);
class RepositoryBase {
    // public
    constructor() {
        // this.initCollection()
    }
    getCollection() {
        return (0, firestore_1.collection)(db, this.collectionName);
    }
    getData(wheres) {
        return __awaiter(this, void 0, void 0, function* () {
            const ref = this.getCollection();
            const q = (0, firestore_1.query)(ref, ...(wheres !== null && wheres !== void 0 ? wheres : []));
            return (yield (0, firestore_1.getDocs)(q)).docs.map(doc => (Object.assign(Object.assign({}, doc.data()), { id: doc.id })));
        });
    }
    setData(documents) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield Promise.all(documents.map((document) => __awaiter(this, void 0, void 0, function* () {
                if (document.id) {
                    return yield (0, firestore_1.setDoc)((0, firestore_1.doc)(db, this.collectionName, document.id), Object.assign({}, document));
                }
                else {
                    document.createdAt = (0, dayjs_1.default)().toISOString();
                    return yield (0, firestore_1.addDoc)(this.getCollection(), document);
                }
            })));
            return results;
        });
    }
}
exports.RepositoryBase = RepositoryBase;
