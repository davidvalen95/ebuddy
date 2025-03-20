'use client'
import {Box, Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { EntityUser } from "@repo/library/src/entity"
import {ComponentMolculeModal} from "@/components/molecules/ComponentMoleculeModal";
import  {useState} from 'react'
import {FormContainer} from "@/components/molecules/form/FormContainer";
import {FormInput} from "@/components/molecules/form/FormInput";
import {apiPutUser} from "@/apis/user/apiPutUser";


type UserComponentUserTableProps = {
    users: EntityUser[],
    onSubmit?: any,
}
export function UserComponentUserTable(props:UserComponentUserTableProps) {

    const [isModalOpen,setIsModalOpen] = useState<boolean|undefined>(false)
    const [selectedUser,setSelectedUser] = useState<EntityUser | null>(null)


    const  handleSubmit = async (data)=>{
        console.log('submit',data)
        const response  = await apiPutUser(data)
        if(response.isSuccess && props.onSubmit){
            props.onSubmit()
        }
        setIsModalOpen(false)

    }

    return<div className={"flex flex-col gap-5"}>

        <Button variant={"contained"} onClick={()=> {
            setIsModalOpen(true);setSelectedUser(null)
        }}>

            Add New User
        </Button>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.users.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >

                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.email}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.address}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <Button variant={"contained"}  onClick={()=>{
                                    setIsModalOpen(true)
                                    setSelectedUser(row)
                                }}>Edit</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

        <ComponentMolculeModal modalStates={[isModalOpen,setIsModalOpen]} >


                <Container sx={{ display: 'flex', width:{xs:'100%',md:'800px'},justifyContent:'center', alignItems:'center',padding:6}} >
                    <FormContainer hookFormOptions={{defaultValues:selectedUser ?? {}}} onSubmit={handleSubmit} >
                        <div className={"flex flex-col gap-5 w-full"}>
                            <Typography variant={"h5"} >{selectedUser && selectedUser.name || "Insert Data"}</Typography>
                            <FormInput name={"name"} label={"name"} />
                            <FormInput name={"email"} label={"email"} />
                            <FormInput name={"address"} label={"Address"} />
                            <Button variant={"contained"} type={"submit"}>{selectedUser && "Update" || "Add New"}</Button>
                        </div>
                    </FormContainer>
                </Container>



        </ComponentMolculeModal>
    </div>
}
