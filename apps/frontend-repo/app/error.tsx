'use client'

import {Button, Typography} from "@mui/material"
import {ComponentMoleculeCard} from "@/components/molecules/ComponentMoleculeCard";


type ErrorBoundaryType = {
    error: Error & { digest?: string }
    reset: () => void
}

export default function ErrorBoundary(props: ErrorBoundaryType) {

    return <div className={"flex justify-center flex-col gap-10 container mx-auto"}>

        <ComponentMoleculeCard title={"Error"}>
            <div>
                <Typography variant={"h6"}>
                    {props.error.message}
                </Typography>
                <Typography variant={"body2"}>
                    {props.error.stack}
                </Typography>
            </div>


        </ComponentMoleculeCard>


        <Button variant={"contained"} onClick={props.reset}>Try again</Button>
    </div>

}