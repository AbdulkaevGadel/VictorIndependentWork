import {useLayoutEffect, useState} from 'react'
import {Counter} from "./components/counter/Counter.tsx";
import {SettingCounter} from "./components/settingCounter/SettingCounter.tsx";
import s from "./App.module.scss"
import {useLocalStorage} from "./customHooks/useLocalStorage.ts";

export type CountSettingsType = {
    maxValue: number
    startValue: number

}

function App() {
    const [count, setCount] = useState('0')
    const [countSettings, setCountSettings] = useLocalStorage<CountSettingsType>('counterSettings', {
        maxValue: 4,
        startValue: 0
    })

    useLayoutEffect(() => {
        setCount(String(countSettings.startValue))
    }, [countSettings.startValue]);


    const [isClickedButtonSet, setIsClickedButtonSet] = useState(false)


    return (
        <div className={s.appMain}>
            <SettingCounter setCountSettings={setCountSettings} count={count} setCount={setCount}
                            maxValue={countSettings.maxValue} startValue={countSettings.startValue}
                            isClickedButtonSet={isClickedButtonSet} setIsClickedButtonSet={setIsClickedButtonSet}/>
            <Counter count={count} setCount={setCount} maxValue={countSettings.maxValue}
                     startValue={countSettings.startValue}
                     isClickedButtonSet={isClickedButtonSet}/>
        </div>
    )
}

export default App

////  КоунтерСетингФилд сделать простым, без стэйта и логики ( разделить логику на два и вынести выше)
///  интермедиа выпилили(логику перенести)
//// задизейэблить reset при стартовом значение +
/// Икноред покрасить в красный 
