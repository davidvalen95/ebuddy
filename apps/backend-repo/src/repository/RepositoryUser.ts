import { EntityUser } from "@repo/library/src/entity";
import {RepositoryBase} from "./RepositoryBase";


 class RepositoryUser extends RepositoryBase<EntityUser> {
    protected collectionName: string = 'USERS';


}

export const repositoryUserInstance = new RepositoryUser();

