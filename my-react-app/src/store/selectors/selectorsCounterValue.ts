import type {Counter, CounterState} from "../reducers/counter-reducer.ts";


export const selectCount = (state:Counter): CounterState['count'] => state.count

export const selectMaxValue = (state:Counter): CounterState['maxValue'] => state.maxValue

export const selectStartValue = (state:Counter): CounterState['startValue'] => state.startValue

export const selectFlagDisabledButton = (state:Counter): CounterState['flagDisabledButton'] => state.flagDisabledButton

