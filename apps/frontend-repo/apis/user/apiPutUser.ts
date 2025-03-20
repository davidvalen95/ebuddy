import {fetchBase} from "@/apis/fetchBase";
import { EntityUser } from "@repo/library/src/entity";



export async function apiPutUser(body:Omit<EntityUser,'createdAt'>){

    const url = new URL(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/update-user-data`);

    const response =  await fetchBase<{
        users: EntityUser[]
    }>(url,{
        fetchOption:{
            body:JSON.stringify(body),
            method: "POST"
        }
    })


    return response;


}