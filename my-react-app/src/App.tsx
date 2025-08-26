import {Counter} from "./components/counter/Counter.tsx";
import {SettingCounter} from "./components/settingCounter/SettingCounter.tsx";
import s from "./App.module.scss"
import {useAppDispatch} from "./common/hooks/useAppDispatch.ts";
import {useAppSelector} from "./common/hooks/useAppSelector.ts";
import {selectMaxValue, selectStartValue} from "./store/selectors/selectorsCounterValue.ts";
import {useEffect, useLayoutEffect} from "react";
import {setCountAC, setMaxValueAC, setStartValueAC} from "./store/reducers/counter-reducer.ts";
import {type CountSettingsType, useLocalStorage} from "./customHooks/useLocalStorage.ts";




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
    // console.log(countSettings)

    // useEffect(() => {
    //     if (countSettings !== null) {
    //         console.log(maxValue)
    //         console.log(startValue)
    //         dispatch(setMaxValueAC(countSettings.maxValue))
    //         dispatch(setStartValueAC(countSettings.startValue))
    //     }
    // }, [dispatch, countSettings, startValue]);

    // useEffect(() => {
    //         localStorage.setItem('counter', JSON.stringify({
    //             maxValue: maxValue,
    //             startValue: startValue,
    //         }));
    //
    // }, [maxValue, startValue]);




    return (
        <div className={s.appMain}>
            <SettingCounter
                maxValue={maxValue}
                startValue={startValue}
                // setCountSettings = {setCountSettings}
            />
            <Counter
                maxValue={maxValue}
                startValue={startValue}/>
        </div>
    )
}

export default App

