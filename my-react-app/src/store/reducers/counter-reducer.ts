import {createAction, createReducer} from "@reduxjs/toolkit";

export type Counter = {
    count: string
    maxValue:number
    startValue:number
    flagDisabledButton:boolean
}

export const setCountAC =
    createAction<{ count: Counter['count']}>('SET_COUNTER/COUNTER_REDUCER')
export const setMaxValue =
    createAction<{ maxValue: Counter['maxValue']}>('SET_MAX_VALUE/COUNTER_REDUCER')
export const setStartValue =
    createAction<{ startValue: Counter['startValue']}>('SET_START_VALUE/COUNTER_REDUCER')
export const setFlagDisabledButton =
    createAction<{ flagDisabledButton: Counter['flagDisabledButton']}>('SET_FLAG_DISABLED_BUTTON/COUNTER_REDUCER')


export type CounterState = Counter
const initialState: CounterState = {
    count: "0",
    maxValue: 0,
    startValue: 1,
    flagDisabledButton: false,
}


export const counterReducer = createReducer(initialState, builder => {
    builder
        .addCase(setCountAC, (state, action) => {
            state.count=action.payload.count
        })
        .addCase(setMaxValue, (state, action) => {
            state.maxValue=action.payload.maxValue
        })
        .addCase(setStartValue, (state, action) => {
            state.startValue=action.payload.startValue
        })
        .addCase(setFlagDisabledButton, (state, action) => {
            state.flagDisabledButton=action.payload.flagDisabledButton
        })

})

