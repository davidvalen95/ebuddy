'use client'

import {FormProvider, useForm } from "react-hook-form";


export type FormBaseProps = {
    name:string;
    label:string;
}
type FormContainerProps = {
    children: React.ReactNode;
    hookFormOptions?: Parameters<typeof useForm>[0];
    onSubmit?: (value:any,hookForm:ReturnType<typeof useForm<any>>) => void;
}
export function FormContainer(props:FormContainerProps) {


    const hookForm = useForm({
        mode:"all",
        ...props.hookFormOptions
    });

    const submit = async (data:object)=>{

        if(props.onSubmit){
             props.onSubmit(data,hookForm);
        }
    }

    return <>
        <form className={"w-full"} onSubmit={hookForm.handleSubmit(submit)}>

            <FormProvider {...hookForm} >

                {props.children}

            </FormProvider>
        </form>
    </>
}