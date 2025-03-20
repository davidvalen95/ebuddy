import {EntityBase} from "@repo/library/src/entity";
import dayjs from "dayjs";


import {
    getFirestore,
    connectFirestoreEmulator,
    collection,
    getDocs,
    query,
    where,
    setDoc,
    doc,
    addDoc
} from "firebase/firestore";
import {configFirebase} from "../config/configFirebase";
// firebaseApps previously initialized using initializeApp()
import { initializeApp } from "firebase/app";
initializeApp(configFirebase);
const db = getFirestore();
connectFirestoreEmulator(db, 'localhost', 9922);

export abstract class RepositoryBase<T extends EntityBase> {


    protected abstract collectionName: string;

    // public
    constructor() {
        // this.initCollection()
    }


    protected getCollection() {
        return collection(db, this.collectionName)
    }


    async getData(wheres?:ReturnType<typeof where>[]) {

        const ref = this.getCollection();
        const q = query(ref, ...(wheres??[]));
        return (await getDocs(q)).docs.map(doc => ({...doc.data(), id: doc.id}));
    }

    async setData(
        documents: (Omit<T,"id" | "createdAt"> & Partial<EntityBase> )[],
    ) {
        const results = await Promise.all(documents.map(async (document) => {
            if (document.id) {
                return await setDoc(doc(db, this.collectionName, document.id), {...document});
            } else {
                document.createdAt = dayjs().toISOString()
                return await addDoc(this.getCollection(), document);
            }
        }))

        return results;


    }
}