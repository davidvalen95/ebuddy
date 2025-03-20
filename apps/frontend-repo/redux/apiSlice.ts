import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

 interface ApiState {
    value: number
}

const initialState: ApiState = {
    value: 0,
}

 const sliceInit = createSlice({
    name: 'api',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
    },
})


export  const apiSlice = {
    reducer: sliceInit.reducer,
    actions: sliceInit.actions
}
