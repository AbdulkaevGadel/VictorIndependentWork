import {useEffect, useLayoutEffect, useState} from 'react'
import {Counter} from "./components/counter/Counter.tsx";
import {SettingCounter} from "./components/settingCounter/SettingCounter.tsx";
import s from "./App.module.scss"
import {useLocalStorage} from "./customHooks/useLocalStorage.ts";
import {useAppDispatch} from "./common/hooks/useAppDispatch.ts";
import {setMaxValue, setStartValue} from "./store/reducers/counter-reducer.ts";
import {useAppSelector} from "./common/hooks/useAppSelector.ts";
import {selectMaxValue, selectStartValue} from "./store/selectors/selectorsCounterValue.ts";

export type CountSettingsType = {
    maxValue: number
    startValue: number

}


function App() {

     const dispatch = useAppDispatch()

    const maxValue = useAppSelector(selectMaxValue)
    const startValue = useAppSelector(selectStartValue)

    const [count, setCount] = useState('0')
    const [countSettings, setCountSettings] = useLocalStorage<CountSettingsType>('counterSettings', {
        maxValue: 4,
        startValue: 0
    })
    const [flagDisabledButton, seFlagDisabledButton] = useState(false)

    useEffect(() => {
        if(localStorage.length === 0){
            localStorage.setItem('counter', JSON.stringify({
                maxValue: maxValue,
                startValue: startValue,
            }));
        }
        const counterData = localStorage.getItem('counter');
        if (counterData !== null) {
            const counter: CountSettingsType = JSON.parse(counterData);
            const maxValue = {
                maxValue:counter.maxValue
            }
            const startValue = {
                startValue:counter.startValue
            }
            dispatch(setMaxValue(maxValue))
            dispatch(setStartValue(startValue))
        }
    }, [maxValue,startValue]);

    useLayoutEffect(() => {
        setCount(String(countSettings.startValue))
    }, [countSettings.startValue]);


    return (
        <div className={s.appMain}>
            <SettingCounter setCountSettings={setCountSettings}
                            setCount={setCount}
                            maxValue={countSettings.maxValue}
                            startValue={countSettings.startValue}
                            flagDisabledButton={flagDisabledButton}
                            seFlagDisabledButton={seFlagDisabledButton}/>
            <Counter count={count}
                     setCount={setCount}
                     maxValue={countSettings.maxValue}
                     startValue={countSettings.startValue}
                     flagDisabledButton={flagDisabledButton}/>
        </div>
    )
}

export default App

