import {Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import React from "react";



type ComponentMoleculeCardProps  = {
    title: string;
    children: React.ReactNode;
}
export function ComponentMoleculeCard(props: ComponentMoleculeCardProps) {

    return <Card >
        <CardHeader

            action={
                <IconButton aria-label="settings">
                </IconButton>
            }
            title={props.title}
            titleTypographyProps={{
                variant: "h6",
                fontWeight: "bold",
            }}
        />
        <CardContent>
            {props.children}
        </CardContent>
    </Card>

}