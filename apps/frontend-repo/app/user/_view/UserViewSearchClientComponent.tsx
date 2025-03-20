'use client'

import {FormContainer} from "@/components/molecules/form/FormContainer";
import {FormInput} from "@/components/molecules/form/FormInput";
import {Box, Button, CircularProgress} from "@mui/material";
import {useState} from "react";
import {UserComponentUserTable} from "@/app/user/_view/UserComponentUserTable";
import {useFetch} from "@/hooks/useFetch";
import {apiFetchUser} from "@/apis/user/apiFetchUser";
import {ComponentAtomLoader} from "@/components/atoms/ComponentAtomLoader";


export function UserViewSearchClientComponent() {

    const [searchFormValue, setsearchFormValue] = useState<{ search?: string }>({})

    // @ts-ignore
    const userFetch = useFetch(apiFetchUser)
    return <div className={"flex flex-col gap-5"}>


        <FormContainer onSubmit={(value, hookForm) => {


            setsearchFormValue(value);
            userFetch.refetch(value.search)

        }}>
            <div className={"flex flex-col gap-5"}>

                <FormInput name={"search"} label={"Search By Name"}/>
                <Button type={"submit"} variant={"contained"}>Search</Button>
            </div>
        </FormContainer>

        {searchFormValue.search && `Search: ${searchFormValue.search}`}

        {userFetch.isLoading
            &&    <ComponentAtomLoader />
            || <UserComponentUserTable users={userFetch.response?.data?.users ?? []} onSubmit={()=>{userFetch.refetch()}}/>

        }


    </div>
}