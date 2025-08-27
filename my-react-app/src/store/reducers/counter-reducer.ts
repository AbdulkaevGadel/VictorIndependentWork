import {createReducer} from "@reduxjs/toolkit";
import {setCountAC, setFlagDisabledButtonAC, setMaxValueAC, setStartValueAC} from "../actions/counter-action-creators.ts";
import type {CounterTypes} from "../types/counterTypes.ts";

const initialState: CounterTypes = {
    count: "0",
    maxValue: 1,
    startValue: 0,
    flagDisabledButton: false,
}


export const counterReducer = createReducer(initialState, builder => {
    builder
        .addCase(setCountAC, (state, action) => {
            state.count = action.payload
        })
        .addCase(setMaxValueAC, (state, action) => {
            state.maxValue = action.payload
        })
        .addCase(setStartValueAC, (state, action) => {
            state.startValue = action.payload
        })
        .addCase(setFlagDisabledButtonAC, (state, action) => {
            state.flagDisabledButton = action.payload
        })

})

