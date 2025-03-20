'use client'
import {AppBar, Drawer, IconButton, List, ListItem, ListItemText, Menu, Toolbar, Typography } from "@mui/material";
import { useState } from "react";

import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import {RootState} from "@/redux/store";
import { useSelector } from "react-redux";


type ComponentTemplateHeaderProps = {
    children: React.ReactNode;
}

export function ComponentTemplateHeader(props:ComponentTemplateHeaderProps){

    const [open, setOpen] = useState(false);
    const apiCounter = useSelector((state: RootState) => state.apiSlice.value)

    const toggleDrawer = (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(!open);
    };

    const list = () => (
        <div
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
        >
            <List>
                {[
                    {
                        label: "Home",
                        href: "/"
                    },
                    {
                        label: "User",
                        href: "/user"
                    }
                ].map((current) => (
                    <Link href={current.href} key={current.label}>
                        <ListItem button >
                            <ListItemText primary={current.label} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    );

    return <>
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        Ebuddy - David Valentino
                    </Typography>
                    <Typography variant="body1">
                        - Redux ApiCounter: {apiCounter}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={open} onClose={toggleDrawer}   PaperProps={{
                sx: { width: "200px" },
            }}>
                {list()}
            </Drawer>
            <main style={{ padding: '16px' }}>

                {props.children}
            </main>
        </div>
    </>
}