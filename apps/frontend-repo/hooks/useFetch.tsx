import {useCallback, useEffect, useState } from "react";
import {fetchBase} from "@/apis/fetchBase";
import { useDispatch } from "react-redux";
import {apiSlice} from "@/redux/apiSlice";




//# for best practice, loading i set on hook state based instead of global state management
//# for the question to use redux. i will use to count how many useFetch has been called

export function useFetch<T extends typeof fetchBase>(fetchApi:T){

    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponse] = useState<Awaited<ReturnType<T>>>()
    const dispatch = useDispatch()

    const refetch = useCallback((...args:any)=>{
        dispatch(apiSlice.actions.increment())
        setIsLoading(true)

        fetchApi.apply(null,args).then(response => {
            setResponse(response as Awaited<ReturnType<T>>)
            setIsLoading(false)
        }).catch(err=>{
            throw new Error(err)
        })
    }, [])

    useEffect(() => {

        refetch();

    }, []);


    return {
        isLoading,
        response,
        refetch
    }


}