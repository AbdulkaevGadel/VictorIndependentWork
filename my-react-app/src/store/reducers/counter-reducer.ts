import {createAction, createReducer} from "@reduxjs/toolkit";

export type Counter = {
    count: string
    maxValue:number
    startValue:number
    flagDisabledButton:boolean
}

export const setCountAC =
    createAction<Counter['count']>('SET_COUNTER/COUNTER_REDUCER')
export const setMaxValueAC =
    createAction<number>('SET_MAX_VALUE/COUNTER_REDUCER')
export const setStartValueAC =
    createAction<Counter['startValue']>('SET_START_VALUE/COUNTER_REDUCER')
export const setFlagDisabledButtonAC =
    createAction<Counter['flagDisabledButton']>('SET_FLAG_DISABLED_BUTTON/COUNTER_REDUCER')


export type CounterState = Counter
const initialState: CounterState = {
    count: "0",
    maxValue: 1,
    startValue: 0,
    flagDisabledButton: false,
}


export const counterReducer = createReducer(initialState, builder => {
    builder
        .addCase(setCountAC, (state, action) => {
            state.count=action.payload
        })
        .addCase(setMaxValueAC, (state, action) => {
            // console.log('zawel')
            state.maxValue=action.payload
        })
        .addCase(setStartValueAC, (state, action) => {
            state.startValue=action.payload
        })
        .addCase(setFlagDisabledButtonAC, (state, action) => {
            state.flagDisabledButton=action.payload
        })

})

