import type {RootState} from "../store.ts";
import type {CounterTypes} from "../types/counterTypes.ts";


export const selectCount = (state:RootState): CounterTypes['count'] => state.counter.count

export const selectMaxValue = (state:RootState): CounterTypes['maxValue'] => state.counter.maxValue

export const selectStartValue = (state:RootState): CounterTypes['startValue'] => state.counter.startValue

export const selectFlagDisabledButton = (state:RootState): CounterTypes['flagDisabledButton'] => state.counter.flagDisabledButton

