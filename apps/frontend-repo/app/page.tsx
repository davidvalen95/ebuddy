import {Button, Typography} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import {ComponentMoleculeCard} from "@/components/molecules/ComponentMoleculeCard";

export default function Home() {
    return (
        <div className={"container mx-auto"}>
            <div className={"flex flex-col items-center justify-center h-full gap-8"}>

                <Typography variant="h5" gutterBottom>
                    Hello EBUDDY, welcome to my Short Interview
                </Typography>


                <ComponentMoleculeCard title={"User"} >

                    <p>Click here User dashboard</p>
                    <Link href={"/user"}>
                        <Button variant="contained" color="primary">
                            User
                        </Button>

                    </Link>

                </ComponentMoleculeCard>




            </div>
        </div>
    );
}
