import { createReducer } from "@reduxjs/toolkit";

const initialState = {c:0};

const rootReducer = createReducer(initialState,
    (builder) => {
        builder
        .addCase('INCREAMENT',(state) => {
            state.c = state.c + 1;
        })
        .addCase('DECREAMENT',(state) => {
            state.c = state.c > 0 ? state.c - 1 : 0;
        })
        .addCase('INCREAMENT25',(state,action) => {            
            state.c = state.c + action.payload;
        })
    }
);


export default rootReducer;
