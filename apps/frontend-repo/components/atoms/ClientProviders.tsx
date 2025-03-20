'use client'

import { Provider } from "react-redux";
import {store} from "@/redux/store";
import {themeDefault} from "@/theme/themeDefault";
import { ThemeProvider } from "@mui/material";


type ReduxProviderProps = {
    children: React.ReactNode;
}

export function ClientProviders(props:ReduxProviderProps) {


    return<>
    <Provider store={store}>
        <ThemeProvider theme={themeDefault}>

        {props.children}
        </ThemeProvider>
    </Provider>
    </>
}