import {fetchBase} from "@/apis/fetchBase";
import { EntityUser } from "@repo/library/src/entity";



export async function apiFetchUser(searchName?:string){

    const url = new URL(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/fetch-user-data`);





    const response =  await fetchBase<{
        users: EntityUser[]
    }>(url,{
        query: {
            ...(searchName && {name:searchName}),
        }
    })


    return response;


}