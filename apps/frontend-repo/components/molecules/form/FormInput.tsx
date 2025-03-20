'use client'
import { TextField } from "@mui/material"
import { useFormContext } from "react-hook-form"
import {FormBaseProps} from "@/components/molecules/form/FormContainer";



type FormInputProps = FormBaseProps & {
    placeholder?:string;

}
export function FormInput(props:FormInputProps){

    const parentHookForm = useFormContext()

    return <>

        <TextField id="outlined-basic" label={props.label} variant="outlined"

            {...parentHookForm.register(props.name)}
            placeholder={props.placeholder ?? props.label}
        />


    </>

}