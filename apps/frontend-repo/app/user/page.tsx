import {FormInput} from "@/components/molecules/form/FormInput";
import {FormContainer} from "@/components/molecules/form/FormContainer";
import {UserViewSearchClientComponent} from "@/app/user/_view/UserViewSearchClientComponent";
import {Suspense} from "react";
import {Box, CircularProgress, Grid, Typography} from "@mui/material";
import {UserViewSearchServerComponent} from "@/app/user/_view/UserViewSearchServerComponent";
import {ComponentMoleculeCard} from "@/components/molecules/ComponentMoleculeCard";
import {ComponentAtomLoader} from "@/components/atoms/ComponentAtomLoader";


export default function PageUser() {

    return <>
        <Grid container spacing={5}>
            <Grid item md={6} xs={12}>
                <ComponentMoleculeCard title={"Client Component"}>
                    <UserViewSearchClientComponent/>

                </ComponentMoleculeCard>
            </Grid>
            <Grid item md={6} xs={12}>
                <ComponentMoleculeCard title={"Server Component"}>
                    <Typography variant={"body1"}>
                        This is a different showcase, just to show the server component approach.
                    </Typography>
                    <Typography variant={"body1"}>

                        For sake of simplicity i will not implement the search feature for the server component, just
                        for
                        show casing :).
                    </Typography>

                    <Typography variant={"body1"} className={"mt-5"}>
                        For me i prefer to handle rendering loading with suspense by server component.
                    </Typography>
                    <Typography variant={"body1"}>
                        it utilizes the strong aspect of next js and its seo friendly. instead of using client side
                        rendering with state
                        management.
                    </Typography>
                    <Suspense fallback={<div><ComponentAtomLoader/></div>}>
                        <UserViewSearchServerComponent/>
                    </Suspense>
                </ComponentMoleculeCard>
            </Grid>
        </Grid>


    </>

}