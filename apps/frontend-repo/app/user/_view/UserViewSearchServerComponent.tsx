import {UserComponentUserTable} from "@/app/user/_view/UserComponentUserTable";
import {apiFetchUser} from "@/apis/user/apiFetchUser";


type UserViewSearchServerComponentProps = {}
export async function UserViewSearchServerComponent(props:UserViewSearchServerComponentProps) {


    const response = await apiFetchUser()



    return <div className={"flex flex-col gap-5"}>
        <UserComponentUserTable users={response?.data?.users ?? []}  />
    </div>


}