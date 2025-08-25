import {Counter} from "./components/counter/Counter.tsx";
import {SettingCounter} from "./components/settingCounter/SettingCounter.tsx";
import s from "./App.module.scss"
import {useAppDispatch} from "./common/hooks/useAppDispatch.ts";
import {useAppSelector} from "./common/hooks/useAppSelector.ts";
import {selectMaxValue, selectStartValue} from "./store/selectors/selectorsCounterValue.ts";
import {useEffect} from "react";
import {setMaxValueAC, setStartValueAC} from "./store/reducers/counter-reducer.ts";

export type CountSettingsType = {
    maxValue: number
    startValue: number

}


function App() {

    const dispatch = useAppDispatch()


    const maxValue = useAppSelector(selectMaxValue)
    const startValue = useAppSelector(selectStartValue)

    // const [count, setCount] = useState('0')
    // const [countSettings, setCountSettings] = useLocalStorage<CountSettingsType>('counterSettings', {
    //     maxValue: 4,
    //     startValue: 0
    // })
    // const [flagDisabledButton, seFlagDisabledButton] = useState(false)


    // useEffect(() => {
    //     const counterData = localStorage.getItem('counter');
    //     if (counterData !== null) {
    //         const counter: CountSettingsType = JSON.parse(counterData);
    //         const maxValue = counter.maxValue
    //         const startValue = counter.startValue
    //         console.log(maxValue)
    //         console.log(startValue)
    //         dispatch(setMaxValueAC(maxValue))
    //         dispatch(setStartValueAC(startValue))
    //     }
    // }, []);

    // useEffect(() => {
    //         localStorage.setItem('counter', JSON.stringify({
    //             maxValue: maxValue,
    //             startValue: startValue,
    //         }));
    //
    // }, [maxValue, startValue]);

    // useLayoutEffect(() => {
    //     setCount(String(startValue))
    // }, [startValue]);


    return (
        <div className={s.appMain}>
            <SettingCounter
                maxValue={maxValue}
                startValue={startValue}
            />
            <Counter
                maxValue={maxValue}
                startValue={startValue}/>
        </div>
    )
}

export default App

