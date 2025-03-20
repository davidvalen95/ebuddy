import {EntityBase} from "./EntityBase";


export type EntityUser = EntityBase & {

    name:string;
    email:string;
    address?:string;
}
