import type {CounterTypes} from "../../store/types/counterTypes.ts";

export type SettingCounterPropsType = {
    maxValue: CounterTypes['maxValue'];
    startValue: CounterTypes['startValue'];
}