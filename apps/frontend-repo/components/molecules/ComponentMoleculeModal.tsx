'use client'

import {Box, Drawer, Modal } from '@mui/material'
import  {useState} from 'react'

type ComponentMoleculeModalPropsType = {


    modalStates: ReturnType<typeof useState<boolean>>
    children: React.ReactNode

}

export function ComponentMolculeModal (props:ComponentMoleculeModalPropsType){



    return <>
        <Drawer
            anchor={"bottom"}
            open={props.modalStates[0]}
            onClose={()=>{
                props.modalStates[1](false)
            }}
        >
            {props.children}
        </Drawer>
    </>
}