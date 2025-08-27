import {createAction} from "@reduxjs/toolkit";
import type {CounterTypes} from "../types/counterTypes.ts";


export const setCountAC =
    createAction<CounterTypes['count']>('SET_COUNTER/COUNTER_REDUCER')
export const setMaxValueAC =
    createAction<number>('SET_MAX_VALUE/COUNTER_REDUCER')
export const setStartValueAC =
    createAction<CounterTypes['startValue']>('SET_START_VALUE/COUNTER_REDUCER')
export const setFlagDisabledButtonAC =
    createAction<CounterTypes['flagDisabledButton']>('SET_FLAG_DISABLED_BUTTON/COUNTER_REDUCER')