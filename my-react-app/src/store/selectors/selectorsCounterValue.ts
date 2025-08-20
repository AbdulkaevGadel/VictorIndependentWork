import type {Counter, CounterState} from "../reducers/counter-reducer.ts";
import type {RootState} from "../store.ts";


export const selectCount = (state:RootState): CounterState['count'] => state.counter.count

export const selectMaxValue = (state:RootState): Counter['maxValue'] => state.counter.maxValue

export const selectStartValue = (state:RootState): CounterState['startValue'] => state.counter.startValue

export const selectFlagDisabledButton = (state:RootState): CounterState['flagDisabledButton'] => state.counter.flagDisabledButton

